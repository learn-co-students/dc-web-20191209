function fetchHobbies() {
    fetch("http:/localhost:3000/hobbies")
        .then(res => res.json())
        .then(hobbiesArray => {
            hobbiesArray.forEach(hobby => renderHobby(hobby))
        })
}

function renderHobby(hobby) {
    let hobbyList = document.querySelector("#hobbies")
    let hobbyListItem = document.createElement("li")
    hobbyList.appendChild(hobbyListItem)
    hobbyListItem.innerText = hobby.name
}