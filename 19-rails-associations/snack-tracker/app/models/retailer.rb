class Retailer < ApplicationRecord
    has_many :snacks
    accepts_nested_attributes_for :snacks,
        :reject_if => :all_blank
end
