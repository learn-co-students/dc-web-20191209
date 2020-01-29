document.addEventListener("DOMContentLoaded", () => {
  console.log('connected...')
  taskForm().addEventListener('submit', handleFormSubmit)
  sortBtn().addEventListener('click', handleSort)
});

// select elements

function taskForm(){
  return document.getElementById('create-task-form')
}

function newTaskDescription(){
  return document.getElementById('new-task-description')
}

function tasksList(){
  return document.getElementById('tasks')
}

function sortBtn(){
  return document.getElementById('sort-btn')
}

function prioritySelect(){
  return document.getElementById('priority-dropdown')
}

// event handlers

function handleFormSubmit(e){
  e.preventDefault()
  // grab input
  let taskText = newTaskDescription().value
  console.log('...submitting form')
  // create the list item
  const taskLi = document.createElement('li')
  // set text to list item
  const textSpan = document.createElement('span')
  // set text color according to task priority
  const selectedPriority = document.getElementById('priority-dropdown').value
  // if(selectedPriority === "high"){
  //   taskLi.style.color = "red"
  // } else if(selectedPriority === "medium"){
  //   taskLi.style.color = "orange"
  // } else if(selectedPriority === "low"){
  //   taskLi.style.color = "green"
  // }
  taskLi.className = selectedPriority
  taskLi.dataset.sortIndex = prioritySelect().selectedIndex + 1
  // if priority is high, make text color red
  // if priority is med, make text color orange
  // if priority is low, make text color green
  textSpan.innerText = taskText
  // give our list item an id that increments automatically
  taskLi.id = tasksList().childElementCount+1
  // debugger
  // select ul and append list item to our ul
  tasksList().appendChild(taskLi)
  e.target.reset()
  // create delete btn
  let deleteBtn = renderDeleteBtn()
  taskLi.append(textSpan,deleteBtn)
  // taskLi.appendChild(deleteBtn)


  // append it to list item
  // remove the li on click
}

function renderDeleteBtn(){
  let deleteBtn = document.createElement('button')
  deleteBtn.addEventListener('click', handleDeleteBtn)
  deleteBtn.innerText = "X"
  return deleteBtn
}

function handleDeleteBtn(e){
  console.log('...deleting this task')
  // target list item for this button
  let liToDelete = e.target.parentElement
  // remove from DOM
  liToDelete.remove()
}

function handleSort(){
  console.log('sorting tasks...');
  // get the ul nodelist
  // create an Array from the ul nodelist
  let tasksNodelist = tasksList().childNodes
  let tasksArray = Array.from(tasksNodelist).slice(1)
  let sortedArray = tasksArray.sort(sortCallback)


  debugger
  // debugger
  // sort tasksArray
  // somehow put it on the dom
  // clear out the list
  tasksList().innerHTML = ""
  // iterate through our SORTED nodeList, and append to list
  sortedArray.forEach(el => tasksList().appendChild(el))
}

function sortCallback(a, b){
  let aIndex = parseInt(a.dataset.sortIndex)
  let bIndex = parseInt(b.dataset.sortIndex)
  // debugger
  if(aIndex < bIndex){
    return -1;
  } else if(aIndex > bIndex){
    return 1
  } else {
    return 0
  }
}
