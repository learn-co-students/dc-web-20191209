class Dog

    attr_accessor :address, :aggressive
    attr_reader :name, :breed 
    
    def initialize(name, address, breed, aggressive)
        @name, @address, @breed, @aggressive = name, address, breed, aggressive
    end

end