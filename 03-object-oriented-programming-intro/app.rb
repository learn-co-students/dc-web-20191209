# ella = {name: "Ella", fluffiness: 10}
# lexi = {name: "Lexi", fluffiness: 6}
# garfield = {name: "Garfield", fluffiness: 7}


class Cat

    attr_writer :age
    attr_reader :number_of_legs
    attr_accessor :name, :fluffiness

    @@species = "feline"
    @@all = []

    def initialize(name, age, fluffiness, number_of_legs=4)
        @name = name
        @age = age 
        @fluffiness = fluffiness
        @number_of_legs = number_of_legs
        @@all << self
    end

    def say_species
        puts "I am a kitty cat"
    end

    # def name=(new_name)
    #     @name = new_name # instance variable
    # end

    # attr_reader
    # def name
    #     @name
    # end

    # attr_writer
    # def fluffiness=(fluffiness)
    #     @fluffiness = fluffiness   
    # end

    # def fluffiness
    #     @fluffiness
    # end

    # def age=(new_age)
    #     @age = new_age
    # end

    def age
        if @age < 5
            "I am a pretty kitten"
        else
            "I am a full grown cat, but still cuter than a dog"
        end
    end

    def say_how_old_you_are
        "Based on how old I am, #{self.age}"
    end

    def introduce
        """My name is #{self.name}.  I have a fluffiness of #{self.fluffiness}. #{self.age}""" # self means the instance e.g. Ella
    end

    def self.species # in method name, self means the class Cat
        @@species
    end

    def self.all 
        @@all 
    end
end

ella = Cat.new("Ella", 18, 10)
# puts ella.name
# puts ella.fluffiness
# puts ella.age

lexi = Cat.new("Lexi", 4, 5, 3)

# puts lexi.introduce
 
second_cat = Cat.all[1]
print second_cat.age



# write a class method (Cat.introduce_all) that lists all the cats and their fluffiness score
# in the form "Ella has a fluffiness of 10"
