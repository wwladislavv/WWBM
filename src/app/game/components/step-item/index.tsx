import HexagonalWrap from 'components/hexagonal-wrap';

import styles from './step-item.module.css';

type Props = {
    disabled?: boolean;
    selected?: boolean;
    value: string;
};

export default function StepItem({
    selected = false,
    disabled = false,
    value,
}: Props) {
    return (
        <HexagonalWrap
            status={selected ? 'selected' : undefined}
            className={styles.step}
            small
        >
            <div
                className={`${styles.stepValue} ${disabled ? styles.disabled : ''}`}
            >
                ${value}
            </div>
        </HexagonalWrap>
    );
}
