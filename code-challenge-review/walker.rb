class Walker

    attr_accessor :name
    attr_reader :birthday 
    
    def initialize(name, birthday)
        @name, @birthday = name, birthday
    end

end