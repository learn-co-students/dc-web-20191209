document.addEventListener("DOMContentLoaded", () => {
  console.log('connected');
  createTaskForm().addEventListener('submit', handleForm)
  sortBtn().addEventListener('click', handleSort)
});

function createTaskForm(){
  return document.getElementById('create-task-form')
}

function tasksList(){
  return document.getElementById('tasks')
}

function sortBtn(){
  return document.getElementById('sort-btn')
}

function prioritySelect(){
  return document.getElementById('priority-select')
}

function textField(){
  return document.getElementById('new-task-description')
}

function handleForm(e){
  e.preventDefault()
  let taskText = e.target.querySelector('#new-task-description').value
  console.log('submitted form')
  taskDiv = document.createElement('li')
  taskSpan = document.createElement('span')
  taskSpan.className = prioritySelect().value
  taskSpan.innerText = taskText
  taskDiv.dataset.sort = prioritySelect().selectedIndex
  debugger
  taskDiv.appendChild(taskSpan)
  // if(prioritySelect().value === "high"){
  //   taskDiv.style.color = "red"
  // } else if(prioritySelect().value === "mid"){
  //   taskDiv.style.color = "orange"
  // } else if(prioritySelect().value === "low"){
  //   taskDiv.style.color = 'green'
  // }
  // taskDiv.className = prioritySelect().value
  tasksList().appendChild(taskDiv)
  e.target.reset()
  let editBtn = document.createElement('button')
  editBtn.innerText = "Edit"
  let deleteBtn = document.createElement('button')
  deleteBtn.innerText = "Delete"
  deleteBtn.addEventListener('click', handleDelete)
  taskDiv.append(editBtn, deleteBtn)
  editBtn.addEventListener('click', handleEdit)
}

function handleEdit(e){
  console.log('editing task');
  debugger
  let taskToEdit = e.target.parentElement.firstElementChild
  textField().value = taskToEdit.innerText
  prioritySelect.value = taskToEdit.dataset.
  // handle button differently, perhaps change button text to update?
  document.getElementById('submit-btn').value = "Update Task"
  // change form state to editing. dataset attribute?
}

function handleDelete(e){
  console.log('deleting this task...')
  e.target.parentElement.remove()
}

function handleSort(){
  debugger
  let tasksArr = Array.from(tasksList().childNodes).slice(1)
  let sortedArr = tasksArr.sort(sortCallback)
  removeChildren(tasksList())
  sortedArr.forEach(div => tasksList().appendChild(div))
}

function removeChildren(node){
  while(node.firstChild){
    node.removeChild(node.firstChild)
  }
}

function sortCallback(a,b){
  debugger
  let itemA = parseInt(a.dataset.sort)
  let itemB = parseInt(b.dataset.sort)
  return (itemA > itemB) ? 1 : ((itemB > itemA)) ? -1 : 0
}
