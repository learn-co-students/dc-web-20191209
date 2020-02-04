// let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  fetchAllToys()
  initFormToggle()
  initAddToyForm()
  initSearchForm()
});

let allToys = []

// selectors
function getToyCollection(){
  return document.getElementById('toy-collection')
}

function getToyForm(){
  return document.querySelector('.add-toy-form')
}

function getSearchForm(){
  return document.getElementById('search-form')
}

// fetches
function fetchAllToys(){
  fetch("http://localhost:3000/toys")
  .then(r => r.json())
  .then(toys => {
    allToys = toys
    renderToys()})
}

function renderToys(searchedToys){
  // debugger
  // if searchedToys is passed in
  let toys = searchedToys ? searchedToys : allToys
  // if(searchedToys){
  //   searchedToys.forEach(toy => buildToyCard(toy))
  // } else {
  //   allToys.forEach(toy => buildToyCard(toy))
  // }
  toys.forEach(toy => buildToyCard(toy))
  // then iterate and render searched toys
  // if searchedToys is NOT passed in
  // then iterate and render ALL toys
  // iterate through toys
  // make a card for each toy
}

function buildToyCard(toy){
  console.log(toy)
  let card = document.createElement('div')
  card.className = "card"
  getToyCollection().appendChild(card)
  let h2 = document.createElement('h2')
  h2.innerText = toy.name
  let img = document.createElement('img')
  img.className = "toy-avatar"
  img.src = toy.image
  let p = document.createElement('p')
  p.innerText = toy.likes
  p.id = `likes-${toy.id}`
  let button = document.createElement('button')
  button.addEventListener('click', handleIncrementLike)
  button.className = "like-btn"
  button.innerText = "Like <3"
  button.id = toy.id
  card.append(h2, img, p, button)
}

// init elements
function initFormToggle(){
  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    // addToy = !addToy;
    let addToy = toyForm.dataset.formToggle
    if (!addToy) {
      toyForm.dataset.formToggle = "true"
      toyForm.style.display = "block";
    } else {
      toyForm.dataset.formToggle = ""
      toyForm.style.display = "none";
    }
  });
}

function initAddToyForm(){
  getToyForm().addEventListener('submit', handleToyForm)
}

function initSearchForm(){
  getSearchForm().addEventListener('submit', handleSearchBar)
}

// event handlers

function handleIncrementLike(e){
  console.log('Adding Like')
  let toyId = e.target.id
  let currentLikes = parseInt(e.target.previousElementSibling.innerText)
  let newLikes = ++currentLikes
  // debugger
  let configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({likes: newLikes})
  }
// Conditional increase to the toy's like count
// A patch request sent to the server at http://localhost:3000/toys/:id updating the number of likes that the specific toy has
  fetch(`http://localhost:3000/toys/${toyId}`, configObj)
    .then(r => r.json())
    .then(updatedToyObj => updateLikes(updatedToyObj))
// Headers and body are provided below (If your request isn't working, make sure your header and keys match the documentation.)
}

function updateLikes(toy){
  let likesDiv = document.getElementById(`likes-${toy.id}`)
  likesDiv.innerText = toy.likes
}

function handleToyForm(e){
  // debugger
  // get user values from form
  // submit values in POST request
  // render new toy to page without reloading
  e.preventDefault()
  console.log('adding new toy!')
  let newToyName = e.target.name.value
  let newToyImg = e.target.image.value
  let body = {
    name: newToyName,
    image: newToyImg,
    likes: 0
  }
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(body)
  }

  fetch('http://localhost:3000/toys', configObj)
  .then(r => r.json())
  .then(data => buildToyCard(data))
  // debugger
}

function handleSearchBar(e){
  e.preventDefault()
  console.log('searching for toy...')
  // get user input
  let searchTerm = e.target.search.value.toLowerCase()
  // iterate through toys and return toys that match
  let searchResult = allToys.filter(toy => toy.name.toLowerCase().includes(searchTerm))
  // getToyCollection().innerHTML = ""
  clearDiv(getToyCollection())
  renderToys(searchResult);
  e.target.reset()
}

function clearDiv(div){
  while(div.firstChild){
    div.firstChild.remove()
  }
}
