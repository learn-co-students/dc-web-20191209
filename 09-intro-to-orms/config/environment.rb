require 'bundler'
Bundler.require
require_relative '../lib/book.rb'
require_relative '../lib/author.rb'

DB = SQLite3::Database.new('db/library.db')


# module SQLite3

#     class Database

#         def initialize(file_path)
#             @file_path = file_path
#             # set up actual database

#         end

#         def execute(sql)
#             # executes the sql against the database

#         end
#     end

# end