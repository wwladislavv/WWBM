import styles from './home.module.css';

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className={styles.home}>{children}</div>;
}
