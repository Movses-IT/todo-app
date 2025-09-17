import React, { useState } from "react";
import styles from "./EditTask.module.css";

function EditTask({ task, handleShowInfo, onSave }) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [startDate, setStartDate] = useState(task?.startDate || "");
  const [finishDate, setFinishDate] = useState(task?.finishDate || "");

  const handleSaveTasks = () => {
    if (!title.trim() || !description.trim()) {
      alert("Title and description cannot be empty. Please fill them in.");
      return;
    }
    if (!startDate || !finishDate) {
      alert("Please select both start and finish dates.");
      return;
    }

    onSave({ id: task.id, title, description, startDate, finishDate });
  };

  return (
    <div className={styles.section} onClick={handleShowInfo}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleShowInfo}>✖</button>

        <h1 className={styles.cardTitle}>Edit Task</h1>

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

        <button className={styles.add} onClick={handleSaveTasks}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditTask;
