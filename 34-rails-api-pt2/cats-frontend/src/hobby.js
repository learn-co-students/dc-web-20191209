// A User should see a list of all the hobbies when the page is loadeda
function fetchHobbies() {
// When the page is loaded I will a make a GET request to
// localhost:3000/hobbies
    fetch("http://localhost:3000/hobbies")
        .then(res => res.json())
        .then(hobbyArray => hobbyArray.forEach(hobby => renderHobby(hobby)))
}

function renderHobby(hobby){
    // and manipulate the DOM by adding list items to the hobby UL
    let hobbyList = document.getElementById('hobbies')

    let newLi = document.createElement('li')
    newLi.innerText = hobby.name 

    hobbyList.appendChild(newLi)
}