document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = e.target.newTaskDescription.value;
    const dueDate = e.target.newDueDate.value;
    console.log(dueDate);
    addTask(task, dueDate);
    form.reset();
  });

  function addTask(task, dueDate) {
    const li = document.createElement("li");
    li.textContent = `${task}:  Due on ${dueDate} `;
    const color = setPriorityLevel();
    console.log(color);
    li.style.color = color;
    const button = document.createElement("button");
    button.addEventListener("click", deleteButton);
    button.textContent = "x";
    li.appendChild(button);
    document.querySelector("#tasks").appendChild(li);
  }

  function deleteButton(e) {
    e.target.parentNode.remove();
  }

  function setPriorityLevel() {
    const priorityLevel = document.querySelector("#dropDown").value;
    if (priorityLevel === "highPriority") {
      return "red";
    } else if (priorityLevel === "mediumPriority") {
      return "yellow";
    } else if (priorityLevel === "lowPriority") {
      return "green";
    }
  }
});
