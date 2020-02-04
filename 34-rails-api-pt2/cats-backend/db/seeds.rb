# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cat.destroy_all
Hobby.destroy_all

ella = Cat.create(name: "Ella", image: "https://i.imgur.com/YksIEqY.jpg")
penelope = Cat.create(name: "Penelope", image: "https://en.bcdn.biz/Images/2018/6/12/27565ee3-ffc0-4a4d-af63-ce8731b65f26.jpg")

eating = Hobby.create(name: "Eating", description: "Nom nom nom")
sleeping = Hobby.create(name: "Sleeping", description: "Take a nap")
scratching = Hobby.create(name: "Scratching", description: "Rowr")

ella.hobbies << eating 
ella.hobbies << sleeping 
penelope.hobbies << scratching
penelope.hobbies << sleeping