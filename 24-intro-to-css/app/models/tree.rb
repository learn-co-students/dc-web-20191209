class Tree < ApplicationRecord
    has_many :favorites
    has_many :users, through: :favorites

    validates_presence_of :common_name, :binomial_name, :category
    validates :common_name, uniqueness: true
    validates :binomial_name, uniqueness: true
    validates :category, :inclusion => %w(deciduous coniferous)
    validate :two_words

    private

    def two_words
        if self.binomial_name.split.length != 2
            self.errors.add(:binomial_name, "Must be two words long")
        end
    end
end
