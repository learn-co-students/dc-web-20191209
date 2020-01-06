class Book < ActiveRecord::Base

    def slug
        self.title.gsub(" ", "_").downcase
    end
end
