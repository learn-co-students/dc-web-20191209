document.addEventListener('DOMContentLoaded', function(){
    fetchHobbies()
    fetchCats()
    catForm().addEventListener("submit", createCat)
})

function catForm() {
    return document.querySelector("form")
}
