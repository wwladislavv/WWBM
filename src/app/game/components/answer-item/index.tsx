import { useCallback, useMemo } from 'react';
import type { SyntheticEvent } from 'react';

import HexagonalWrap from 'components/hexagonal-wrap';
import { Status } from 'game/types';

import styles from './answer-item.module.css';

const answerIdByIndex = 'abcdefghijklmnopqrstuvwxyz'.split('');

type Props = {
    answerStatus: [number, Status] | null;
    onClick: (index: number) => void;
    value: string;
    index: number;
};

export default function AnswerItem({
    answerStatus,
    onClick,
    value,
    index,
}: Props) {
    const status = useMemo(
        () =>
            answerStatus && answerStatus[0] === index
                ? answerStatus[1]
                : undefined,
        [answerStatus, index]
    );

    const handleClick = useCallback(
        (event: SyntheticEvent<HTMLButtonElement>) => {
            event.preventDefault();
            onClick(index);
        },
        [onClick, index]
    );

    return (
        <button
            className={styles.answer}
            onClick={handleClick}
            type="button"
            disabled={answerStatus?.[1] === Status.SELECTED}
        >
            <HexagonalWrap status={status && status}>
                <span className={styles.answerId}>
                    {answerIdByIndex[index].toUpperCase()}.
                </span>{' '}
                {value}
            </HexagonalWrap>
        </button>
    );
}
