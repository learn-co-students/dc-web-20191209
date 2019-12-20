class Patient < ActiveRecord::Base

    has_many :doctor_patients
    has_many :doctors, through: :doctor_patients

end