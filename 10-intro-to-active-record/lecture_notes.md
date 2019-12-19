SETUP:  Copy last lecture 'author.rb' final code into here.  Delete everything in db file.  Copy this repo's Gemfile, README.


- Go over objectives

- Review author-backup created earlier in the week

- Show empty Seed file and put in a few `find_or_create` statements.  

- show updated gem file.
- Point out new methods of `find_by_name` and `find_or_create`
- What is Rake? (review)
    - Helps to do tasks
    - For example `rake db:migrate`

- get active record

connect to database
    - in environment file
    old way:
```rb
    require 'sqlite3'
    require 'require_all'
    require_all 'lib'
    # setting up the database connection (old way)
    DB = SQLite3::Database.new("chinook.db")
```

new way:

```rb
    ActiveRecord::Base.establish_connection({
    adapter: 'sqlite3',
    database: 'test.db', 
})
```

Test.db doesn't exist, so what will happen?

```rb
desc "Runs a console"
task :console do
    require_relative "environment.rb"
    pry.start
end
```

ActiveRecord::Base.connection - shows some of the connection stuff.

ActiveRecord::Base  # point out namespacing /module
    - class within AR
    - used to establish connection
    - in labs used to access methods we've been writing in SQL

make a db folder and put dbs in there.  make sub directory migrate

Rake -T has not added any extra tasks as expected
http://api.rubyonrails.org/classes/ActiveRecord/Tasks/DatabaseTasks.html  

Gemfile
    gem 'activerecord'
    gem 'sinatra-activerecord'
[etc]

```rb
config/database.yml
    development:
      adapter: sqlite3
      database: db/development.sqlite3
      pool: 5
      timeout: 5000
```

config/environment.rb
```rb
    require 'bundler/setup'
    Bundler.require

    ActiveRecord::Base.establish_connection(
      adapter: 'sqlite3',
      database: "db/development.sqlite"
    )

    ActiveRecord::Base.logger = Logger.new(STDOUT)

    require_all 'lib'
```

Make a migration
    up/down vs change

```rb
rake db:create_migration NAME=create_books_table
```

```rb
class CreateBooksTable < ActiveRecord::Migration

    def change
        create_table :books do |t|
            t.string :title
        end
    end

end
```

in rake console
    migration = CreateArtists.new
    ls migration to show some methods
    migration.change to execute

sqlite3 db/test.db
.tables
.schema artists

add a column
`rake db:create_migration NAME=add_rating`

```rb
class AddRating < ActiveRecord::Migration

    def change
        add_column :books, :rating, :integer
    end

end
```

AR Methods to show: (show docs with lots of other methods)
`.all`
`find`
`find_by` 
`where`
`create`
`find_or_create_by`
`Book.order(rating: :desc)`
`.limit(5)`

