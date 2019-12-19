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

    def ingredients
    # should return an array of ingredients for the bakery's desserts
        # Ingredient.all.select do |ingredient|
        #     ingredient.bakery == self
        # end

        self.desserts.map do |dessert|
            dessert.ingredients 
        end.flatten

    end

    def desserts
        # should return an array of desserts the bakery makes
        Dessert.all.select do |dessert|
            dessert.bakery == self 
        end

    end

    def average_calories
    # should return a number totaling the average number 
    # of calories for the desserts sold at this bakery
        # add the calories for each dessert of this bakery
        # divide by number of desserts
        total_calories = self.desserts.sum {|dessert| dessert.calories}
        number_of_desserts = self.desserts.length
        return total_calories / number_of_desserts
    end

    def shopping_list
    # should return a string of names for ingredients for the bakery
        self.ingredients.map {|ingredient| ingredient.name}
    end

end