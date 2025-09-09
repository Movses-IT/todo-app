// const BASE_URL = "http://localhost:3000/tasks";

// export const fetchTasks = async () => {
//   try {
//     const res = await fetch(BASE_URL);
//     if (!res.ok) throw new Error(`Failed to reload tasks: ${res.status} ${res.statusText}`);
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching tasks:", error.message);
//     return [];
//   }
// };

// export const createTask = async (task) => {
//   try {
//     const taskData = { ...task };
//     delete taskData.image; // убираем поле image, если вдруг есть

//     const res = await fetch(BASE_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(taskData),
//     });

//     if (!res.ok) throw new Error(`Failed to create task: ${res.status} ${res.statusText}`);
//     return await res.json();
//   } catch (error) {
//     console.error("Error creating task:", error.message);
//     return null;
//   }
// };

// export const deleteTask = async (taskId) => {
//   try {
//     const res = await fetch(`${BASE_URL}/${taskId}`, { method: "DELETE" });
//     if (!res.ok) throw new Error(`Failed to delete task: ${res.status} ${res.statusText}`);
//     return { success: true };
//   } catch (error) {
//     console.error("Error deleting task:", error.message);
//     return { success: false, error: error.message };
//   }
// };

// export const updateTaskOnServer = async (task) => {
//   try {
//     const taskData = { ...task };
//     delete taskData.image; // убираем поле image

//     const id = task.id; // թողնել որպես տեքստ
//     if (!id) {
//       throw new Error("Invalid task ID.");
//     }

//     console.log("Updating task with ID:", id);
//     console.log("Task data:", taskData);

//     const res = await fetch(`${BASE_URL}/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(taskData),
//     });

//     if (!res.ok) {
//       const errorDetails = await res.text();
//       throw new Error(`Failed to update task: ${res.status} ${res.statusText} - ${errorDetails}`);
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Error updating task:", error.message);
//     return null;
//   }
// };

const STORAGE_KEY = "tasks";

// Функция для загрузки задач из localStorage
export const fetchTasks = async () => {
  try {
    const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    return [];
  }
};

// Функция для сохранения всех задач в localStorage
const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

// Создание задачи
export const createTask = async (task) => {
  try {
    const tasks = await fetchTasks();
    const newTask = { ...task, id: Date.now().toString() }; // Генерируем id
    tasks.push(newTask);
    saveTasks(tasks);
    return newTask;
  } catch (error) {
    console.error("Error creating task:", error.message);
    return null;
  }
};

// Удаление задачи
export const deleteTask = async (taskId) => {
  try {
    let tasks = await fetchTasks();
    tasks = tasks.filter((task) => task.id !== taskId);
    saveTasks(tasks);
    return { success: true };
  } catch (error) {
    console.error("Error deleting task:", error.message);
    return { success: false, error: error.message };
  }
};

// Обновление задачи
export const updateTaskOnServer = async (task) => {
  try {
    let tasks = await fetchTasks();
    const index = tasks.findIndex((t) => t.id === task.id);
    if (index === -1) throw new Error("Task not found");
    tasks[index] = task;
    saveTasks(tasks);
    return task;
  } catch (error) {
    console.error("Error updating task:", error.message);
    return null;
  }
};
