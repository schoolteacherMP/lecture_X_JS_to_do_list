const form = document.querySelector('form');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add('completed');
    }
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks();
    });
    li.appendChild(deleteButton);
    li.addEventListener('click', () => {
      task.completed = !task.completed;
      renderTasks();
    });
    taskList.appendChild(li);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const text = newTaskInput.value.trim();
  if (text !== '') {
    tasks.push({ text, completed: false });
    newTaskInput.value = '';
    renderTasks();
  }
});

renderTasks();