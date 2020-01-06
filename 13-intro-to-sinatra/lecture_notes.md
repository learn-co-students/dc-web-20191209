
- MVC Architecture
    - Models: Store the data
    - Controllers: Logic of your app
    - Views: Templates to show user

    - Restaurant analogy:
        - User sits down and gives an order to the waiter (controller) who goes into the kitchen where the chef (model) makes the food.  The waiter then brings it out in a fancified arrangement of a view.
        - The user does not talk directly to the model / chef
        - Logic in the view should be kept to a minimum as much as possible

    - These are guidelines, not rules.

- Show structure of new app with MVC folders.

- Create migration for the `books` table.
- Show seed table using Google Books

```rb
class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :author
      t.string :title
      t.text :snippet
    end
  end
end
```

- ** Review request/response and server/client terminology
- Build out controllers



```rb
class ApplicationController < Sinatra::Base

    get "/" do
        "Hello World"
    end
    
end
```

- `rackup` to run.  Introduce `shotgun` when sufficiently annoyed

- works but violates our MVC architecture
- add `erb :home`

- make a `home.html.erb` file in apps/views.  This will break because Sinatra looks in the controllers view.

- `set :views, 'app/views'` at top of controller

- Review CRUD.  Introduce REST.  "Representational State Transfer".  URL should represent the state of the data we're in.  ESPN.com is a good example.

- Show chart of HTTP Verbs to Paths to Actions
- Some things have two parts--e.g., creating a new object needs a get request for the empty form and a post request to make the thing

- Fill out deliverables with planned routes

- Build index route
`@books = Book.all` Point out `@`

- discuss `<% %>` vs `<%= %>`

## Detail page:

- Put in pry to show params

```rb
    get '/books/:id' do
        @book = Book.find(params[:id])
        erb :show
    end
```
- Change index page to links

**PART ONE ENDS HERE**

s