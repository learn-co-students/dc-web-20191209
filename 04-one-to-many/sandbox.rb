class School

    attr_reader :name
    
    def initialize(name)
        @name = name
        @instructors = []
    end

    def instructors
        @instructors
    end

    def add_instructor(name)
        @instructors << name
    end

end

flatiron = School.new("Flatiron")
puts flatiron.name

class Instructor

    attr_accessor :name

    def initialize(name)
        @name = name
    end

end


paul = Instructor.new("Paul Nicholsen")
jc = Instructor.new("J.C. Changg")
shannon = Instructor.new("Shannon Nabors")

flatiron.add_instructor(paul)
flatiron.add_instructor(jc)
flatiron.add_instructor(shannon)

print flatiron.instructors

jc.name = "J.C. Chang"
puts "******"
print flatiron.instructors




