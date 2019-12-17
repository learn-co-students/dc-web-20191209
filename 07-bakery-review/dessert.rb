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

    def ingredients
    # should return an array of ingredients for the dessert
        Ingredient.all.select do |ingredient|
            ingredient.dessert == self 
        end
    end

    def calories
    # should return a number totaling all the calories for all the ingredients included in that dessert
        # choose the ingredients for that dessert
        # get the calories for those ingredients
        # and add them together
        # total_num = self.ingredients.collect do |ingredient|
        #     ingredient.calories 
        # end
        # total_num.sum
        # self.ingredients.sum do |ingredient|
        #     ingredient.calories
        # end
        calorie_count = 0
        self.ingredients.each do |ingredient|
            calorie_count += ingredient.calories
        end
        return calorie_count
    end
end

