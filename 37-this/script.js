// "use strict"

let paul = {
    firstName: "Paul",
    lastName: "Nicholsen",
    greet: greet
}

let ann = {
    firstName: "Ann",
    lastName: "Duong",
    greet: greet

}
document.getElementById("ann").addEventListener('click', greet.bind(ann))
document.getElementById("paul").addEventListener('click', greet.bind(paul))

function greet(){
    console.log(`${this.firstName} says hi`)
    console.log("In main function, this is ", this)
    function setNewProperty() {
        this.newProperty = "foobar"
        console.log("In inner function, this is ", this)

    }
    setNewProperty.bind(this)()
}



