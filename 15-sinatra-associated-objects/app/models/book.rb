class Book < ActiveRecord::Base

    belongs_to :author

    def slug
        self.title.gsub(" ", "_").gsub("?", "").downcase
    end
end
