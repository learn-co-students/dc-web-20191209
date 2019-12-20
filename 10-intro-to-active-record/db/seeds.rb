require_relative '../config/environment.rb'

Author.find_or_create_by(name: "Mark Twain")
Author.find_or_create_by(name: "Charles Dickens")
Author.find_or_create_by(name: "Maya Angelou")
Author.find_or_create_by(name: "Charlotte Bronte")
Author.find_or_create_by(name: "Shel Silverstein")

Book.find_or_create_by(title: "Harry Potter and The Prisoner of Azkaban")
Book.find_or_create_by(title: "Wuthering Heights")