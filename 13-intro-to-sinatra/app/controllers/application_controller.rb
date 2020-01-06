class ApplicationController < Sinatra::Base

    set :views, "app/views"

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

    get "/books/:title/:id" do 
        book_id = params[:id]
        @book = Book.find(book_id)
        erb(:show)
    end

end
