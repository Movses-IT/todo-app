import styles from './About.module.css';

export default function About() {
  return (
    <main className={styles.about}>
      <h1 className={styles.title}>About This App</h1>
      <p className={styles.description}>Welcome to TaskMaster, your friendly and efficient ToDo List app! We are passionate about helping you stay organized, boost productivity, and achieve your goals effortlessly.
        Our mission is to make task management simple, intuitive, and enjoyable for everyone. Whether you’re planning your day, tracking a project, or just jotting down ideas, TaskMaster keeps you on top of your tasks with ease.
        Join thousands of users who trust TaskMaster to organize their lives — one task at a time.</p>
    </main>
  );
}
