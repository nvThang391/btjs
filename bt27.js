var inputNewTask = document.querySelector(".input-task");
var btnAddTask = document.querySelector(".btn-addtask");
var formSubmit = document.querySelector("#form-addtask");
var tableList = document.querySelector(".table-tasks");

formSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  const new_task = inputNewTask.value;
  var tasks = document.createElement("div");
  tasks.classList.add("tasks");
  var content = document.createElement("p");
  content.classList.add("content");
  tasks.appendChild(content);
  content.innerText = `${new_task}`;
  var action = document.createElement("div");
  action.classList.add("action");
  tasks.appendChild(action);
  action.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>
  <i class="fa-solid fa-trash"></i>`;
  tableList.appendChild(tasks);
  formSubmit.reset();

  var btnRemove = document.querySelectorAll(".fa-trash");
  function removeTask(btnRemove) {
    btnRemove.forEach(function (trash) {
      trash.addEventListener("click", function () {
        trash.parentElement.parentElement.remove();
      });
    });
  }
  removeTask(btnRemove);

  var btnEdit = document.querySelectorAll(".fa-pen-to-square");
  btnEdit.forEach((edit) => {
    edit.addEventListener("click", function () {
      var oldTask =
        (edit.parentElement.parentElement.outerHTML = `<form id="form-addtask">
      <input
        type="text"
        placeholder="What is the task today?"
        class="input-task"
        value = ${new_task}
      />
      <button class="btn-addtask" type="submit">Save</button>
    </form>`);
      var newTask =
        (edit.parentElement.parentElement.outerHTML = `<div class="tasks"><p class="content">asd</p><div class="action"><i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash"></i></div></div>`);
      let updateTask = tableList.insertBefore(newTask, oldTask);
    });
  });
});
