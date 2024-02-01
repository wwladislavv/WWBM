'use client';

import Image from 'next/image';

import AnswerItem, { Status } from './components/answer-item';
import GameInfo, { InfoTrigger } from './components/game-info';
import useGameInfo from './components/game-info/use-game-info';

import styles from './game.module.css';

export default function Game() {
    const { isOpen, toggle } = useGameInfo();

    return (
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
                    How old your elder brother was 10 years before you was born,
                    mate?
                </div>
                <div className={styles.answers}>
                    <AnswerItem status={Status.SUCCESS} onClick={() => {}} />
                    <AnswerItem status={Status.ERROR} onClick={() => {}} />
                    <AnswerItem status={undefined} onClick={() => {}} />
                    <AnswerItem status={undefined} onClick={() => {}} />
                </div>
            </div>

            <GameInfo isOpen={isOpen} close={toggle} />
        </div>
    );
}
