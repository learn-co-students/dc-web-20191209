class Ingredient

    attr_reader :name, :calories, :dessert

    @@all = []

    def initialize(name, calories, dessert)
        @name, @calories, @dessert = name, calories, dessert
        @@all << self
    end

    def self.all 
        @@all 
    end


    def bakery
        # should return the bakery object for the 
        # bakery that uses that ingredient
        self.dessert.bakery

    end
    
    def self.find_all_by_name(ingredient_name)
        # should take a string argument return an array of all ingredients 
         # that include that string in their name
         # .find_all_by_name('chocolate') >> ['chocolate sprinkles', 
         # 'chocolate mousse', 'chocolate']

         # go through list of all ingredients 
        Ingredient.all.select do |ingredient|
             # if ingredient.name includes name passed in, return it
            ingredient.name.include?(ingredient_name)
        end

        


    end
end