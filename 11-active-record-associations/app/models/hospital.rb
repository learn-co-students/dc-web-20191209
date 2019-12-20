class Hospital < ActiveRecord::Base

    has_many :doctors
    
    # def doctors
    #     # Go through all the doctors
    #     Doctor.all.select do |doctor|
    #         # choose the ones where hospital id is same as self.id
    #         doctor.hospital_id == self.id
    #     end
    # end
end