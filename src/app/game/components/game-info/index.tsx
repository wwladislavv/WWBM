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
    awards: string[];
    selectedIndex: number;
}
export default function GameInfo({
    isOpen,
    close,
    awards,
    selectedIndex,
}: Props) {
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
                {awards.map((award, index) => (
                    <StepItem
                        key={award}
                        value={award}
                        selected={index === selectedIndex}
                        disabled={index > selectedIndex}
                    />
                ))}
            </div>
        </div>
    );
}
