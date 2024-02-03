import RouteButton from 'components/route-button';

import styles from '../home.module.css';

export default function Page({
    // params,
    searchParams,
}: {
    // params: { result: 'victory' | 'defeat' };
    searchParams: { amount: string };
}) {
    const amount = +searchParams.amount;
    return (
        <>
            <span className={styles.label}>Total score:</span>
            <h1 className={styles.title}>${amount.toLocaleString()} earned</h1>
            <RouteButton
                className={styles.control}
                text="Try again"
                to="/game"
            />
        </>
    );
}
