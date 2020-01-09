class BooksController < Sinatra::Base

  set :views, "app/views/books"
  set :method_override, true

  get "/books" do 
      # showing the index page
      @books = Book.all
      erb :index
  end

  get "/books/new" do 

      erb :new
  end

  get "/books/:id/edit" do 
      @book = Book.find(params[:id])
      erb :edit

  end

  get "/books/:id" do 
      book_id = params[:id]
      @book = Book.find(book_id)
      erb(:show)
  end


  post "/books" do 
      author = Author.find(params[:author_id])
      title = params[:title]
      snippet = params[:snippet]
      @book = Book.find_or_create_by(author: author,
                                     title: title, 
                                     snippet: snippet)
      redirect "/books/#{@book.id}"
  end

  put "/books/:id" do 
     author = Author.find_or_create_by(name: params[:author])
     title = params[:title]
     snippet = params[:snippet]
     book = Book.find(params[:id]) 
     book.update(author: author, title: title, snippet: snippet)
     redirect "/books/#{book.id}"

  end

  delete "/books/:id" do 
      Book.delete(params[:id])
      redirect "/books"
  end

end