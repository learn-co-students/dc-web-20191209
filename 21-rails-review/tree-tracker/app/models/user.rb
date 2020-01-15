class User < ApplicationRecord
    has_many :favorites
    has_many :trees, through: :favorites

    validates :name, presence: true
    validates :username, presence: true, uniqueness: true
end
