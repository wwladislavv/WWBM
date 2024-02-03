import RouteButton from 'components/route-button';

import styles from './home.module.css';

export default function Home() {
    return (
        <>
            <h1 className={styles.title}>Who wants to be a millionaire?</h1>

            <RouteButton className={styles.control} text="Start" to="/game" />
        </>
    );
}
