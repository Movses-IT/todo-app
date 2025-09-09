import React, { useEffect, useState } from "react";
import ToDo from "../../components/ToDo/ToDo";
import TaskCard from "../../components/TaskCard/TaskCard";
import EditTask from "../../components/EditTask/EditTask";
import HomeInfo from "../../components/HomeInfo/HomeInfo";
import { fetchTasks, createTask, deleteTask, updateTaskOnServer } from "../../services/taskService";


export default function Tasks() {
  const [isToDoShow, setIsToDoShow] = useState(false);
  const [isTaskEdit, setIsTaskEdit] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskForEdit, setTaskForEdit] = useState(null);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
  }, []);

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    loadTasks();
  }, []);

  const toggleShowModal = () => setIsToDoShow(prev => !prev);
  const toggleEditModal = () => setIsTaskEdit(prev => !prev);

  const openEditTaskModal = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    setTaskForEdit(task);
    setIsTaskEdit(true);
  };

  const addTask = async (taskData) => {
    const newTask = await createTask(taskData);
    if (newTask) setTasks(prev => [...prev, newTask]);
    setIsToDoShow(false);
  };

  const updateTask = async (updatedTask) => {
    const updated = await updateTaskOnServer(updatedTask);
    if (updated) {
      setTasks(prev => prev.map(t => (t.id === updated.id ? updated : t)));
      setIsTaskEdit(false);
    }
  };

  const handleDelete = async (id) => {
    const result = await deleteTask(id);
    if (result.success) {
      setTasks(prev => prev.filter(task => task.id !== id));
    }
  };

  const handleDone = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="container">
      <button className="toggleDarkMode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1>Todo Input</h1>
      <button className="showButton" onClick={toggleShowModal}>
        {isToDoShow ? "Close" : "Add Task"}
      </button>

      {tasks.length < 1 && <HomeInfo />}
      <div className="cardsContainer">
        {[...tasks]
          .sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1))
          .map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={openEditTaskModal}
              onDelete={handleDelete}
              onDone={handleDone}
              darkMode={darkMode}
            />
          ))}
      </div>

      {isToDoShow && <ToDo handleShowInfo={toggleShowModal} handleAddTask={addTask} />}
      {isTaskEdit && taskForEdit && (
        <EditTask task={taskForEdit} handleShowInfo={toggleEditModal} onSave={updateTask} />
      )}
    </div>
  );
}
