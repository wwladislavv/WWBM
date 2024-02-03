import Image from 'next/image';

import styles from './home.module.css';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className={styles.illustration}>
                <Image
                    src="/main-illustration.svg"
                    alt="Illustration thumb up"
                    fill
                />
            </div>
            <div className={styles.content}>{children}</div>
        </>
    );
}
