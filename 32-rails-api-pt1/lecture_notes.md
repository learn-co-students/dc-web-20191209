Objective:
    - Build a Rails API to serve as the back end
    - Build a SPA to provide the user interface to work with the API

- API is superior to the fake json-server we've been doing as a file is slow, and it doesn't handle relationships well

- Goal:  Build a way for cats with different hobbies to interact

- PREPARE WIREFRAME

- Models needed:
    - Cat
        - Name
        - Breed
        - Image
    - Hobby
        - Name
        - Description
    - CatHobby
        - catId
        - hobbyId

- Build the static stuff first, as shown in initial index.html (already done pre-lecture)

- `rails new cats-  backend --api --database=postgresql`

- generate the new resources.  don't need any views.  just need models and controllers

- `rails g model Cat name breed image && rails g model Hobby name description && rails g model CatHobby catId:integer hobbyId:integer`

- set up relationships on models
- add some seed data

- build out controllers and index routes for hobbies but `render json: Hobby.all` instead of a view

- Try in console on backend page and it works, but it will fail on frontend because of CORS.

```
fetch("http://localhost:3000/hobbies").then(res => res.json()).then(j => console.log(j))
```

- CORS: Cross-Origin Resource Sharing.  Are different origins allowed to share this resource?  

- in cors.rb, allow origins to be `"*"`.  DON'T DO THIS IN PROD

- Start organizing code better:

In hobby.js
```js
function fetchHobbies() {
    fetch("http:/localhost:3000/hobbies")
        .then(res => res.json())
        .then(hobbiesArray => {
            console.log(hobbiesArray)
        })
}
```

Still have access to it in index.js because page is loading all the files

In Cat.js (do the routes and controllers and whatnot):
```js
function fetchCats() {
    fetch("http://localhost:3000/cats")
        .then(res => res.json())
        .then(catArray => catArray.forEach(cat => renderCat(cat)))
}

function renderCat(cat) {
    let catContainer = document.querySelector("#cats")
    let catDiv = document.createElement("div")
    catContainer.appendChild(catDiv)
    // look up semantic docs for card 
    catDiv.classList.add("ui", "card")

    // note this wipes out any event listeners but I just created the card so I know I'm OK
    catDiv.innerHTML = ` <div class="image">
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
    <div class="extra content">
    </div>
  </div>
  `


}
```

END PART ONE

- what if we wanted to list the cat's hobbies?
- we could do a fetch call and get all the cat hobbies.  Could do it in its own controller:

```rb
class CatHobbiesController < ApplicationController

    def index
        render json: CatHobby.all 
    end
end
```

 but this is easier, known as data serializaiton.  Taking data objects from complex data structures and organizing it in some useful way:

```rb
class CatsController < ApplicationController

    def index
        cats = Cat.all 
        cat_hobbies = cats.map do |cat| 
            {cat: cat, hobbies: cat.hobbies}
        end
        render json: cat_hobbies
    end

end
```

- Even better:  to_json

```js
        render json: Cat.all.to_json(
                :except => [:created_at, :updated_at], 
                :include => { :hobbies =>
                    {:except => [:created_at, :updated_at]}
        })
```

- Add hobbies to kitties:
```js
    // add hobbies
    let extraContent = catDiv.querySelector(".extra.content")
    cat.hobbies.forEach(hobby => {
      let hobbyLi = document.createElement("li") // turn extra content div into a ul
      extraContent.append(hobbyLi)
      hobbyLi.innerText = hobby.name
    })
```
- Create new kitty
    - What route do we need?
        - POST to /cats
    - Set up route and controller action

    - add event listener to form to make a post fetch call to `/cats`

    - in Cat.js
```js
function createCat(e) {
  e.preventDefault()
  let catName = event.target.name.value // need name attribute on form
  let catImage = event.target.image.value
  let catBreed = event.target.breed.value
  fetch("http://localhost:3000/cats", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"name": catName, "image": catImage, "breed": catBreed})
  }).then(res => res.json()).then(cat => renderCat(cat))
  e.currentTarget.reset()
}
```

errors because cat doesn't have hobbies.  Move the serialized data stuff to its own method in cat controller

```rb
def serialized_data
    {
    :except => [:created_at, :updated_at], 
    :include => { :hobbies =>
        {:except => [:created_at, :updated_at]}
    }}

end
```