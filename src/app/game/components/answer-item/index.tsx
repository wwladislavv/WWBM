import type { SyntheticEvent } from 'react';

import HexagonalWrap from 'components/hexagonal-wrap';

import styles from './answer-item.module.css';

export enum Status {
    SUCCESS = 'success',
    ERROR = 'error',
}

type Props = {
    status: Status | undefined;
    onClick: () => void;
};

export default function AnswerItem({ status, onClick }: Props) {
    const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick();
    };
    return (
        <button className={styles.answer} onClick={handleClick} type="button">
            <HexagonalWrap status={status && status}>
                <span className={styles.answerId}>A.</span> 10
            </HexagonalWrap>
        </button>
    );
}
