import Image from 'next/image';

import Button from 'components/button';

import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.illustration}>
                <Image
                    src="/main-illustration.svg"
                    alt="Illustration thumb up"
                    fill
                />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Who wants to be a millionaire?</h1>

                <Button className={styles.control} text="Start" />
            </div>
        </div>
    );
}
