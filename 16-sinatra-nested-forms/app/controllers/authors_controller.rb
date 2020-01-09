class AuthorsController < Sinatra::Base

    set :views, "app/views/authors"
    set :method_override, true


    get "/authors" do 
        @authors = Author.all 
        erb :index
    end


    get %r{/authors/([\d]+)} do 
        id = params[:captures][0]
        @author = Author.find(id)
        erb :show

    end

    get "/authors/new" do 
        @one = "1"
        @hello = "hi"
        erb :new
    end

    get "/authors/:name" do 
        slug = params[:name]
        name = slug.gsub("_", " ").titlecase
        @author = Author.find_by(name: name)
        erb :show

    end

    post "/authors" do 

        author_name = params[:name]
        author = Author.find_or_create_by(name: author_name)
        params["book"].each do |book_hash|
            title = book_hash[:title]
            snippet = book_hash[:snippet]
            Book.find_or_create_by(title: title, author: author, snippet: snippet)
        end
        redirect ("/authors/#{author.id}")


    end
end