class Book < ActiveRecord::Base

    def slug
        self.title.gsub(" ", "_").gsub("?", "").downcase
    end
end
