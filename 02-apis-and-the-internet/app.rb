require 'rest-client'
require 'json'
require 'pry'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="

def welcome_user
    system "clear"
    puts "Welcome to our book searcher"
end

def get_search_terms
    puts "What would you like to search for?"
    search_terms = gets.chomp
    if search_terms.empty?
        puts "You must enter something"
        get_search_terms
    else
        return search_terms
    end
end

def build_url(search_terms)
    formatted_search_terms = search_terms.gsub(" ", "+")
    url = GOOGLE_BOOKS_API_BASE_URL + formatted_search_terms
    return url
end

def make_request(url)
    response = RestClient.get(url)
end

def parse_response_to_json(response)
    JSON.parse(response)
end

def get_first_ten_books(json)
    # return an array of hashes of at most ten items
    # [{title: title1, author: author1}, {title: title2, author: author2}]
    first_ten = json["items"][0..10]
    first_ten.collect do |book|
        {title: book["volumeInfo"]["title"], author: book["volumeInfo"]["authors"]}
    end
end

def print_book(book)
    # takes in hash of {title: title1, author: author1} 
    # outputs #{title1} by #{author1}
    author_array = book[:author]
    author_array ||= ["Unknown"]
    author_string = author_array.join(" & ")
    puts "#{book[:title]} by #{author_string}"
    puts "********************\n"
end

def run 
    welcome_user
    search_terms = get_search_terms
    url = build_url(search_terms)
    response = make_request(url)
    json = parse_response_to_json(response)
    first_ten = get_first_ten_books(json)
    first_ten.each {|book| print_book(book)}

end



run