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

    def self.begins_with(letter)
        # returns all walkers whose name starts with a given letter)
        Walker.all.select do |walker|
            walker.name.start_with?(letter)
        end
    end

    def schedule_walk(dog, date)
        # hermione.schedule_walk(cujo)
        new_walk = Walk.new(dog, self, date)
    end
end