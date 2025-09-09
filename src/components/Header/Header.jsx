import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>📝 My Todo App</h1>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;
