Book.destroy_all
Author.destroy_all

GoogleBooks::Adapter.new("Roald Dahl").fetch_books
GoogleBooks::Adapter.new("Brandon Sanderson").fetch_books
GoogleBooks::Adapter.new("Beverly Cleary").fetch_books