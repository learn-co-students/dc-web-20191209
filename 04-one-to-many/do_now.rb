# A puppy is initialized with a cuteness score of 5.  A puppy can raise
# its cuteness score by 3 points if it gets groomed, and lower its score
# by 5 points playing in the mud.  

# The following code works, but there are some problems.  Refactor this code 
# to improve it.  (The code can be downloaded from your learn.co page under
# lecture 04)

class Puppy

    attr_reader :name, :cuteness

    def initialize(name)
        @name = name
        @cuteness = 5
        # save_to_log_file(self)
        # launch_nuclear_missles("Kim Kardashian")
    end

    def cuteness=(cuteness)
        @cuteness = cuteness.clamp(1, 10)
    end

    def play_in_the_mud
        self.cuteness -= 5
    end

    def take_a_bath
        self.cuteness += 3 
    end    
end

fido = Puppy.new("Fido")
puts fido.cuteness == 5 # test initial cuteness
fido.take_a_bath
puts fido.cuteness == 8 # test that take a bath raises cuteness by 3
fido.take_a_bath
puts fido.cuteness == 10 # test that cuteness cannot exceed 10
puts fido.cuteness
