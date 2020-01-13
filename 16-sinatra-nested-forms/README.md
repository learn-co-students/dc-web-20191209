# sinatra-forms-associated-objects

## Objectives

* Describe how the params hash is built
* Describe how to nest hashes inside of the params hash
* Describe how to nest arrays inside of the params hash
* Describe how mass-assignment works in relation to hashes
* Demonstrate how to use params hash to mass-assign and create related objects

## Outline

* Using forms to associate objects!


```text
- Build index page for authors
- Index page should link to authors' detail pages
- Author's detail page should list books
- Books should link to their own detail page
```

```text
Lecture Deliverables:
  As a site visitor, I should be able to see a list of authors
 
  As a site visitor, I should be able to see a list of books. I should be able to click on each book title to see more information about that book.

  As a site visitor, I should be able to see a form where I create a book. When I create a book I can associate it with an existing author.
```

For each deliverable discuss

1. Does the Schema need to Change?
2. What are the necessary route\(s\)?



Questions
- inputs on form fields (name, for, value, etc)
- GET params
- method_override (for patch, put, etc)
- order of controller actions
- conditional rendering
- nested forms
- 
