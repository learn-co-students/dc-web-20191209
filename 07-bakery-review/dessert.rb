class Dessert

    attr_reader :name, :bakery 
    #bakery
    # should return the bakery object for the dessert
    @@all = []

    def initialize(name, bakery)
        @name, @bakery = name, bakery
        @@all << self
    end

    def self.all 
        @@all 
    end

    def self.all_dessert_names
        # returns a list of the strings of all the dessert names 
        # ["Snickerdoodles", "Chocolate Cake", "Cookies"]
        self.all.map do |dessert|
            dessert.name
        end
        # self.all.each do |dessert|
        #     puts dessert.name 
        # end
    end
    
    #ingredients
    # should return an array of ingredients for the dessert
    #calories
    # should return a number totaling all the calories for all the ingredients included in that dessert

end

