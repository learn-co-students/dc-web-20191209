class Dog

    attr_accessor :address, :aggressive
    attr_reader :name, :breed 

    @@all = []

    def initialize(name, address, breed, aggressive)
        @name, @address, @breed, @aggressive = name, address, breed, aggressive
        @@all << self
    end

    def self.all
        @@all 
    end

    def walks 
        Walk.all.select do |walk|
            walk.dog == self
        end
    end

    def walkers
        # returns array of all walkers 
        # who have walked this dog
        walks.collect do |walk|
            walk.walker
        end
    end
end