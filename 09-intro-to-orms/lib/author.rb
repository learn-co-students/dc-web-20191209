class Author

    attr_accessor :name, :id

    def initialize(name, id=nil)
        @name = name
        @id = id
    end

    def save
        if self.id.nil?
            sql = <<-SQL
                INSERT INTO authors (name) VALUES (?)
            SQL
            DB.execute(sql, self.name)
            sql = "SELECT last_insert_rowid()"
            self.id = DB.execute(sql)[0][0]
        else
            sql = <<-SQL
                UPDATE authors set name = ? WHERE id = ?
            SQL
            DB.execute(sql, self.name, self.id)
        end
        return self
    end

    def self.create(name: )
        # Author.create(name: "Maya Angelou") 
        # >> write to the database  
        # >> return Author objects
        author = Author.new(name)
        author.save
        return author
    end

    def self.find(id)
        sql = <<-SQL
            SELECT * FROM authors
            WHERE id = ?
        SQL
        authors_array = DB.execute(sql, id)
        author_array = authors_array[0] # [3, "J.K. Rowling"]
        self.make_author_from_row(author_array)
    end

    def self.all
        # returns all Authors
        sql = <<-SQL
            SELECT * FROM authors 
        SQL
        author_array = DB.execute(sql) # [[1, "Maya Angelou"], [2, "Stephen King"]]
        author_array.map do |row|
            self.make_author_from_row(row)
        end
    end

    def self.make_author_from_row(author_array)
        author_name = author_array[1]
        author_id = author_array[0]
        Author.new(author_name, author_id)
    end
end