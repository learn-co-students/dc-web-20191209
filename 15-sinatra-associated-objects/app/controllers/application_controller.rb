class ApplicationController < Sinatra::Base

    set :views, "app/views"
    set :method_override, true

    get "/" do 
        erb :home
    end

    get "/hi/:name" do

        @name = params[:name]
        
        # get something from database
        # filter out unnecessary records
        # log your identity to the overlords
        erb :hello
    end

    get "/books" do 
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
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]
        @book = Book.find_or_create_by(author: author, title: title, snippet: snippet)
        redirect "/books/#{@book.id}"
    end

    put "/books/:id" do 
       author = params[:author]
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

    get "/funtimes/:first_number/:second_number/:third_number" do
        @first = params[:first_number].to_i
        @second = params[:second_number].to_i
        @third = params[:third_number].to_i
        erb :do_now
    end

end
