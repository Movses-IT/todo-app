import React, { useState } from "react";
import styles from "./SignUp.module.css";

function SignUp() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className={styles.loginContainer}>
      {/* Header Titles */}
      <div className={styles.header}>
        <h2>{isLoginMode ? "Login" : "Sign Up"}</h2>
      </div>

      {/* Tab Controls */}
      <div className={styles.tabControls}>
        <button
          className={`${styles.tabBtn} ${isLoginMode ? styles.active : ""}`}
          onClick={() => setIsLoginMode(true)}
        >
          Login
        </button>
        <button
          className={`${styles.tabBtn} ${!isLoginMode ? styles.active : ""}`}
          onClick={() => setIsLoginMode(false)}
        >
          Signup
        </button>
        <div
          className={`${styles.tabSlider} ${
            isLoginMode ? styles.left : styles.right
          }`}
        ></div>
      </div>

      {/* Form Section */}
      <form className={styles.form}>
        {/* Signup-only Field */}
        {!isLoginMode && (
          <input
            type="text"
            placeholder="Name"
            required
            className={styles.input}
          />
        )}

        {/* Shared Fields */}
        <input
          type="email"
          placeholder="Email Address"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />

        {/* Signup-only Field */}
        {!isLoginMode && (
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className={styles.input}
          />
        )}

        {/* Forgot Password (Only for Login) */}
        {isLoginMode && (
          <div className={styles.forgotPassword}>
            <a href="#">Forgot password?</a>
          </div>
        )}

        {/* Submit Button */}
        <button className={styles.submitBtn}>
          {isLoginMode ? "Login" : "Signup"}
        </button>

        {/* Switch Mode Link */}
        <p className={styles.switchText}>
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsLoginMode(!isLoginMode);
            }}
          >
            {isLoginMode ? "Signup now" : "Login"}
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
