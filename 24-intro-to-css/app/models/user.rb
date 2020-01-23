class User < ApplicationRecord
    has_many :favorites
    has_many :trees, through: :favorites

    validates_presence_of :name, :username
    validates :username, uniqueness: true
end
