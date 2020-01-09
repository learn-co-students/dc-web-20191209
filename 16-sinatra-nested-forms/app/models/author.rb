class Author < ActiveRecord::Base

    has_many :books

    def sanitizer
      self.name.gsub(/\W+/, '').downcase
    end

end