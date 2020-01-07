## Create page:


- Build routes for creating a new book.  Add the form to `new.erb`:

    - get `/books/new`
    - post '/books'

```rb
<form action="/books" method="POST">
    <label for="author">Author</label>
    <input type="text" name="author" >
    <label for="title">Title</label>
    <input type="text" name="title" >
    <label for="snippet">Snippet</label>
    <input type="text" name="snippet" >
    <input type="submit" value="Create book">
</form>
```

- put pry in post to see

- make the long way first, point out we're just recreating params.  Talk about how mass assignment is a security risk.
```rb
    post '/books' do 
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]
    end
```

- renders blank page, because it was a post to books
- `redirect "books/#{book.id}"`


## Edit Page

`get /books/:id/edit`
`patch /books/:id`

```rb
    get '/books/:id/edit' do
        @book = Book.find(params[:id])
        erb :edit
    end

    patch '/books/:id' do
        book = Book.find(params[:id])
        book.update(params)
        redirect "books/#{book.id}"
    end
```
```rb
<form action="/books/<%= @book.id %>" method="patch">
    <label for="author">Author</label>
    <input type="text" name="author" value="<%= @book.author %>">
    <label for="title">Title</label>
    <input type="text" name="title" value="<%= @book.title %>">
    <label for="snippet">Snippet</label>
    <input type="text" name="snippet" value="<%= @book.snippet %>">
    <input type="submit" value="Edit book">
</form>
```

- The URL will be messed up on the submit because the internet doesn't support patch
- Change form method to `POST`
- `<input type="hidden" name="_method" value="patch">`
- `set :method_override, true` at top of controller
- `params` won't work b/c of method attribute; needs to be done manually

## Delete

```rb
    <form action="/books/<%= @book.id %>" method="POST">
        <input type="hidden" value="delete" name="_method">
        <input type="submit" value="Delete this book">
    </form>
```

```rb
    delete "/books/:id" do
        book = Book.find(params[:id])
        book.destroy
        redirect "/books"
    end
```