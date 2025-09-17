import React from "react";
import styles from "./TaskCard.module.css";

const formatDate = (dateStr) => {
  if (!dateStr) return "N/A";
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const TaskCard = ({ task, onDelete, onEdit, darkMode, onDone }) => {
  const doneStyle = task.done
    ? { textDecoration: "line-through", opacity: 0.6 }
    : {};

  return (
    <div className={`
  ${styles.card} 
  ${darkMode ? styles.darkCard : ""} 
  ${task.done ? styles.doneCard : ""}  
  `}>

      <div className={`${styles.cardContent}`} style={doneStyle}>
        <h3
          style={{
            textDecoration: task.done ? "line-through" : "none",
            opacity: task.done ? 0.6 : 1,
            transition: "all 0.3s"
          }}
        >
          {task.title}
        </h3>
        <p>{task.description}</p>
        <p><strong>Start:</strong> {formatDate(task.startDate)}</p>
        <p><strong>Finish:</strong> {formatDate(task.finishDate)}</p>
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.edit} ${darkMode ? styles.darkMode : ""}`}
          onClick={() => onEdit(task.id)}
        >
          Edit
        </button>
        <button
          className={`${styles.delete} ${darkMode ? styles.darkMode : ""}`}
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
        <button
          className={`${styles.done} ${darkMode ? styles.darkMode : ""}`}
          onClick={() => onDone(task.id)}
        >
          {task.done ? "Undone" : "Done"}
        </button>

      </div>
    </div>
  );
};

export default TaskCard;
