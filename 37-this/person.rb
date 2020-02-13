class Person

    def initialize(first_name, last_name)
        @first_name, @last_name = first_name, last_name
    end

    def first_name
        @first_name
    end

    def greet
        puts "#{self.first_name} says hi"
    end

end

buffy = Person.new("Buffy", "Summers")
buffy.greet