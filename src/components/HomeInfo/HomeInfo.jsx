import styles from "./HomeInfo.module.css";

export default function HomeInfo() {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>Welcome to My Todo App.</h1>
        </div>
    );
}
