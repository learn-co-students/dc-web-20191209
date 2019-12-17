class Bakery

    @@all = []

    attr_reader :name 

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        # should return an array of all bakeries
        @@all 
    end

    #ingredients
    # should return an array of ingredients for the bakery's desserts

    def desserts
        # should return an array of desserts the bakery makes
        Dessert.all.select do |dessert|
            dessert.bakery == self 
        end

    end

    # #average_calories
    # should return a number totaling the average number 
    # of calories for the desserts sold at this bakery
    

    # #shopping_list
    # should return a string of names for ingredients for the bakery

end