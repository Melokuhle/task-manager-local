

function saveTask(e) {
  e.preventDefault();

  const taskId = document.getElementById("task-id").value;
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const dueDate = document.getElementById("dueDate").value;

  if (!title || !description || !dueDate) {
    alert("Please fill in all fields.");
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (taskId) {
    // Update existing task
    tasks = tasks.map(task =>
      task.id === taskId ? { id: taskId, title, description, dueDate } : task
    );
  } else {
    // Add new task
    const newTask = {
      id: generateId(),
      title,
      description,
      dueDate
    };
    tasks.push(newTask);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById("task-form").reset();
  document.getElementById("task-id").value = ""; // Clear hidden ID
  renderTasks();
  
}
window.addEventListener("DOMContentLoaded", renderTasks);
 // Function to render tasks from localStorage

