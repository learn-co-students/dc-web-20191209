module GoogleBooks
  class Adapter
    # populates database with seed data
    
    BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

    attr_reader :author

    def initialize(author)
      @author = Author.find_or_create_by(name: author)
    end

    def fetch_books
      books = JSON.parse(RestClient.get(author_url))
      books['items'].each do |item|
        book = ::Book.new
        book.author_id = self.author.id
        book.title = item['volumeInfo']['title']
        book.snippet = item['volumeInfo']['description']

        book.save
      end
    end

    private

    def author_url(max_results = 20)
      "#{BASE_URL}#{self.author.sanitizer}&maxResults=#{max_results}"
    end


  end
end
