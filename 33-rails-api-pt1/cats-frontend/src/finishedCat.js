function fetchCats() {
    fetch("http://localhost:3000/cats")
        .then(res => res.json())
        .then(catArray => catArray.forEach(cat => renderCat(cat)))
}

function renderCat(cat) {
    let catContainer = document.querySelector("#cats")
    let catDiv = document.createElement("div")
    catContainer.appendChild(catDiv)
    // show look up semantic docs for card 
    catDiv.classList.add("ui", "card")
    catDiv.innerHTML = `  <div class="image">
    <img src=${cat.image}>
  </div>
  <div class="content">
    <a class="header">${cat.name}</a>
    <div class="meta">
      <span class="date">Joined in 2013</span>
    </div>
    <div class="description">
        ${cat.name} is a ${cat.breed}.
    </div>
    <ul class="extra content">
    </ul>
  </div>
  `
  // add hobbies
  let extraContent = catDiv.querySelector(".extra.content")
  cat.hobbies.forEach(hobby => {
    let hobbyLi = document.createElement("li")
    extraContent.append(hobbyLi)
    hobbyLi.innerText = hobby.name
  })


}

function createCat(e) {
  e.preventDefault()
  let catName = event.target.name.value // need name attribute on form
  let catImage = event.target.image.value
  // let catBreed = event.target.breed.value
  fetch("http://localhost:3000/cats", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"name": catName, "image": catImage, "breed": catBreed})
  }).then(res => res.json()).then(cat => renderCat(cat))
  e.currentTarget.reset()
}