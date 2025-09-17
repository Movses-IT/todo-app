import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page Not Found</h2>
      <p className={styles.text}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className={styles.link}>← Go back to Home</Link>
    </div>
  );
}