'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import AnswerItem from './components/answer-item';
import GameInfo, { InfoTrigger } from './components/game-info';
import useGameInfo from './components/game-info/use-game-info';
import { Status } from './types';
import type { Config } from './types';

import styles from './game.module.css';

export default function Game() {
    const router = useRouter();

    const { isOpen, toggle } = useGameInfo();

    const [config, setConfig] = useState<Config | null>(null);
    const [questionIndex, setQuestionIndex] = useState<number | null>(null);
    const [answerStatus, setAnswerStatus] = useState<[number, Status] | null>(
        null
    );

    const currentQuestion = useMemo(
        () => (config && questionIndex !== null ? config[questionIndex] : null),
        [config, questionIndex]
    );
    const awards = useMemo(
        () => config?.map(({ award }) => award.toLocaleString()) || [],
        [config]
    );

    useEffect(() => {
        fetch('/config.json')
            .then((res) => res.json() as Promise<Config>)
            .then((res) => {
                const sortedByAward = res.toSorted((a, b) => b.award - a.award);

                setQuestionIndex(sortedByAward.length - 1);
                setConfig(sortedByAward);
            });
    }, []);

    const handleAnswerClick = (index: number) => {
        const isCorrect = currentQuestion?.answers[index].correct;
        const isLast = questionIndex === 0;

        setAnswerStatus([index, Status.SELECTED]);

        setTimeout(() => {
            if (isCorrect) {
                setAnswerStatus([index, Status.SUCCESS]);
            } else {
                setAnswerStatus([index, Status.ERROR]);
            }

            setTimeout(() => {
                setAnswerStatus(null);
                if (isCorrect) {
                    if (isLast) {
                        router.replace(`/home/victory?amount=1000000`);
                    }
                    setQuestionIndex((prev) => prev! - 1);
                } else {
                    const prevAward = config![questionIndex! + 1]?.award || 0;
                    router.replace(`/home/defeat?amount=${prevAward}`);
                }
            }, 1000);
        }, 1000);
    };

    return config && questionIndex !== null ? (
        <div className={styles.game}>
            <div className={styles.main}>
                <InfoTrigger onClick={toggle}>
                    <Image
                        src="/icons/menu.svg"
                        alt="info-menu"
                        width={24}
                        height={24}
                    />
                </InfoTrigger>

                <div className={styles.question}>
                    {currentQuestion?.question}
                </div>
                <div className={styles.answers}>
                    {currentQuestion?.answers.map(({ value }, index) => (
                        <AnswerItem
                            key={value}
                            index={index}
                            value={value}
                            answerStatus={answerStatus}
                            onClick={handleAnswerClick}
                        />
                    ))}
                </div>
            </div>

            <GameInfo
                isOpen={isOpen}
                close={toggle}
                awards={awards}
                selectedIndex={questionIndex || 0}
            />
        </div>
    ) : (
        <p className={styles.loading}>Loading...</p>
    );
}
