```ruby
# what is the data type of x?
# what is the value of x?
x = 3
puts x.class
puts x

# what happens when we run this code?
# what is length and where does it come from?
# how does x know what to do with length?
# what's happening when we run this code?
x = "flatiron"
x.length
```

```rb
class String

  def length
    # write pseudocode for length
  end

  def [](index)
    # get char at index
    # note that punctuation treated just like letters
  end

end
```
# objects complain when they don't know how to respond to messages
# objects complain when they don't know how to execute methods
names.respond_to_undefined_method

# check if an object responds to a message
names.respond_to?("some_method")

- build a Cat hash
- `ella = {"name" => "Ella", "fluffiness" => 10}`
- This is fine but `ella` is just a hash.  We can't extend this to have any behavior we might want a cat to do.  Make an empty Cat class.
- `Cat.new`
```rb
class Cat
    def name=(name)
        @name = name
    end
end
```

- What is the "@"?
    - instance variable
    - accessible throughout the class
    - talk about scope here

- add a getter method
```rb
    def name
        @name
    end
```

- Define getter/setter for name and fluffiness
- custom getter/setters:
```rb
    def fluffiness
        if @fluffiness > 5
            return "Very fluffy"
        else
            return "Not so fluffy"
        end
    end

    def fluffiness=(fluffiness)
      if @fluffiness > 10
        @fluffiness = 10
      elsif < 0
        @fluffiness = 0
      else
        @fluffiness = fluffiness
      end
    end
```

- add initialize method
```rb
    def initialize(name, fluffiness)
        @name = name
        @fluffiness = fluffiness
    end
```

- attr_accessors
- default argument for `number_of_legs`
- Build out stuff
```rb
    def introduction
        "My name is #{self.name}"
    end
```
- `@name vs self.name` -- often the same in practice, but the former accesses the variable 
directly while self.name gets the accessor method
```rb
def introduction
        "My name is #{self.name} and I have a fluffiness score of #{@fluffiness}.  I am #{self.fluffiness}"
end
```
- class variable for @@all
  - it seemed to work to make this an instance method first, and then change it to a class method to demonstrate the difference
- class methods