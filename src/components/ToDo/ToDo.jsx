import React, { useState } from "react";
import styles from "./ToDo.module.css";

function ToDo({ handleShowInfo, handleAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");

  const handleAddClick = () => {
    if (!title.trim() || !description.trim() /*|| !startDate || !finishDate*/) {
      return;
    }

    handleAddTask({ title, description, startDate, finishDate });

    setTitle("");
    setDescription("");
    setStartDate("");
    setFinishDate("");
  };

  return (
    <div className={styles.section} onClick={handleShowInfo}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleShowInfo}>✖</button>

        <h1 className={styles.cardTitle}>Add Task</h1>

        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          name="title"
          type="text"
          className={styles.title}
          placeholder="Title"
        />

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          name="description"
          rows={3}
          className={styles.description}
          placeholder="Description"
        />

        <div className={styles.dateContainer}>
          <label className={styles.label}>
            Start date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={styles.dateInput}
            />
          </label>
          <label className={styles.label}>
            Finish date:
            <input
              type="date"
              value={finishDate}
              onChange={(e) => setFinishDate(e.target.value)}
              className={styles.dateInput}
            />
          </label>
        </div>

        <button
          className={styles.add}
          onClick={handleAddClick}
          disabled={!title.trim() || !description.trim() /*|| !startDate || !finishDate*/}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ToDo;
