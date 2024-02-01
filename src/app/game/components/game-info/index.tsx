import type { ReactNode } from 'react';
import Image from 'next/image';

import StepItem from '../step-item';

import styles from './game-info.module.css';

type InfoTriggerProps = {
    onClick: () => void;
    children: ReactNode;
};
export function InfoTrigger({ onClick, children }: InfoTriggerProps) {
    return (
        <button className={styles.infoTrigger} onClick={onClick} type="button">
            {children}
        </button>
    );
}

interface Props {
    isOpen: boolean;
    close: () => void;
}
export default function GameInfo({ isOpen, close }: Props) {
    return (
        <div className={`${styles.info} ${isOpen ? styles.open : ''}`}>
            <InfoTrigger onClick={close}>
                <Image
                    src="/icons/close.svg"
                    alt="info"
                    width={24}
                    height={24}
                />
            </InfoTrigger>

            <div className={styles.steps}>
                <StepItem value="1,000,000" />
                <StepItem value="1,000" selected />
                <StepItem value="500" disabled />
            </div>
        </div>
    );
}
