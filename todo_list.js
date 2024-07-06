document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");
  const totalTasks = document.getElementById("total-tasks");

  addButton.addEventListener("click", function () {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      addTodoItem(todoText);
      todoInput.value = "";
    }
  });

  function addTodoItem(todoText) {
    const li = document.createElement("li");
    li.innerHTML = `
            <input type="checkbox">
            <span>${todoText}</span>
            <button class="delete-btn">X</button>
        `;
    todoList.appendChild(li);
    updateTotalTasks();
    setDeleteButton(li);
    setCheckbox(li);
  }

  function updateTotalTasks() {
    const totalCount = document.querySelectorAll("#todo-list li").length;
    totalTasks.textContent = totalCount;
  }

  function setDeleteButton(li) {
    const deleteButton = li.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
      li.remove();
      updateTotalTasks();
    });
  }

  function setCheckbox(li) {
    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", function () {
      li.classList.toggle("completed");
    });
  }
});
