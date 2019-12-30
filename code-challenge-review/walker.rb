class Walker

    attr_accessor :name
    attr_reader :birthday 

    @@all = []

    def initialize(name, birthday)
        @name, @birthday = name, birthday
        @@all << self
    end

    def self.all
        @@all 
    end

    def walks
        Walk.all.select do |walk|
            walk.walker == self
        end
    end

    def dogs
        # returns array of all dogs this 
        # walker has walked
        walks.map do |walk|
            walk.dog
        end
    end

    def self.starts_with(letter)
        # returns all walkers whose name starts with a given letter)
        
    end
end