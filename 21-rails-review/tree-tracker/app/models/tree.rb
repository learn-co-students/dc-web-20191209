class Tree < ApplicationRecord
    has_many :favorites
    has_many :users, through: :favorites

    validate :two_words

    private

    def two_words
        number_of_words = self.binomial_name.split.size
        if number_of_words != 2
            self.errors.add(:binomial_name, "Must have two words")
        end
    end
end
