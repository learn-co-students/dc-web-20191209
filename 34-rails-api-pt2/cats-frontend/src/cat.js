function fetchCats() {
    // fetches cat data from API
    fetch("http://localhost:3000/cats")
        .then(res => res.json())
        .then(catArray => catArray.forEach(cat => buildCatCard(cat)))
}


function buildCatCard(cat) {
    let catContainer = document.getElementById("cats")

    let cardDiv = document.createElement('div')
    cardDiv.classList += "card"

    let catImg = document.createElement('img')
    catImg.src = cat.image

    let nameDiv = document.createElement('div')
    nameDiv.innerText = cat.name 

    let hobbyUl = document.createElement('ul')
    cat.hobbies.forEach(hobby => {
        let hobbyLi = document.createElement('li')
        hobbyLi.innerText = hobby.name 
        hobbyUl.appendChild(hobbyLi)
    })
    cardDiv.append(catImg, nameDiv, hobbyUl)

    catContainer.appendChild(cardDiv)
}

function getCatForm() {
    return document.getElementsByTagName('form')[0]
}

function processForm(e) {
    e.preventDefault()
    let name = e.target.name.value
    let image = e.target.image.value
    let cat = {name: name, image: image}
    fetch("http://localhost:3000/cats", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(cat)
    }).then(res => res.json())
        .then(cat => buildCatCard(cat))
        .catch(error => alert("Your cat is dead"))
    e.target.reset()
    
}