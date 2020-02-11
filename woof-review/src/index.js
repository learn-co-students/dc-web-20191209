document.addEventListener("DOMContentLoaded", () => {
  console.log("connected...");
  fetchDogs();
});

function fetchDogs() {
  // fetch all dogs
  fetch("http://localhost:3000/pups")
    .then(response => response.json())
    .then(dogsArr => dogsArr.forEach(dog => renderDog(dog)));
  // iterate through dogs
}

function renderDog(pup) {
  // create a span for each dog with their name
  let nameContainer = document.createElement("span");
  let dogDiv = document.getElementById("dog-bar");
  nameContainer.innerText = pup.name;
  dogDiv.appendChild(nameContainer);
  nameContainer.addEventListener("click", () => renderDogProfile(pup));
}

function renderDogProfile(pup) {
  // make a fetch request to dog/:id
  fetch(`http://localhost:3000/pups/${pup.id}`)
    .then(response => response.json())
    .then(data => renderDogToProfile(data));
}

function renderDogToProfile(pup) {
  let dogInfo = document.getElementById("dog-info");
  // clear out digInfo before rendering new dog
  dogInfo.innerHTML = "";
  console.log("rendering dog profile...");
  console.log(pup);
  let dogImg = document.createElement("img");
  dogImg.src = pup.image;
  let dogName = document.createElement("h2");
  dogName.addEventListener("click", handleEditName);
  dogName.innerText = pup.name;
  dogName.id = pup.id;
  let goodDogBtn = document.createElement("button");
  let dogId = pup.id;
  goodDogBtn.addEventListener("click", e => {
    handleToggleGoodDog(e, dogId);
  });
  dogInfo.append(dogImg, dogName, goodDogBtn);
  if (pup.isGoodDog) {
    goodDogBtn.innerText = "Good Dog!";
  } else {
    goodDogBtn.innerText = "Bad Dog!";
  }
  // setDogBtn(goodDogBtn, pup.isGoodDog);
}

function handleEditName(e) {
  console.log(e.target.id);
  // grab name div
  let nameDiv = e.target;
  let dogInfoDiv = e.target.parentElement;
  let dogId = e.target.id;
  // turn name div into a text field
  let editForm = document.createElement("div");
  // set current value (doggo name) to be text field value
  let nameField = document.createElement("input");
  nameField.id = "doggo-name-field";
  nameField.value = nameDiv.innerText;
  // create a button to update/save changes
  let updateBtn = document.createElement("button");
  updateBtn.innerText = "update doggo name";
  updateBtn.addEventListener("click", () => handleUpdateName(dogId));
  editForm.append(nameField, updateBtn);
  // replace name div with form
  dogInfoDiv.replaceChild(editForm, nameDiv);
}

function handleUpdateName(dogId) {
  // send patch request when button is clicked to save info
  // debugger;
  let newName = document.getElementById("doggo-name-field").value;
  let body = {
    name: newName
  };

  let configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
  fetch(`http:localhost:3000/pups/${dogId}`, configObj)
    .then(r => r.json())
    .then(updatedDoggo => renderDogToProfile(updatedDoggo));
}

// function setDogBtn(button, isGoodDog) {
//   button.innerText = isGoodDog ? "Good Dog!" : "Bad Dog!";
// }

function handleToggleGoodDog(e, dogId) {
  console.log("toggling...");
  // get button
  let btn = e.target;
  // check text of button
  let text = btn.innerText;
  let newGoodDogValue;
  if (text === "Good Dog!") {
    newGoodDogValue = false;
  } else {
    newGoodDogValue = true;
  }
  console.log(text);
  // send patch request to change isGoodDog value to dogs/:id
  fetch(`http://localhost:3000/pups/${dogId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      isGoodDog: newGoodDogValue
    })
  })
    .then(response => response.json())
    .then(updatedDog => renderDogToProfile(updatedDog));

  // toggle button text
}
