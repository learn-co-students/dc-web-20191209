class AuthorsController < Sinatra::Base

    set :views, "app/views/authors"
    set :method_override, true


    get "/authors" do 
        @authors = Author.all 
        erb :index
    end

    get "/authors/:id" do 
        @author = Author.find(params[:id])
        erb :show

    end
end