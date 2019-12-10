
# For each of the following examples, write two methods that solve the 
# problem:  One that uses `.each` and one that uses one of the higher level 
# iterator methods

# Remember:

# map/collect:  Returns an array where each value of the original array 
# corresponds to an element in the new array

# find/detect:  Returns the first element for which the statement in the block
# evaluates as True

# select/find_all:  Returns an array of _all_ elements for which the statement in
# the block evaluates as True

nums = (1..20).to_a #creates an array of all numbers from 1-20
# 1.  Create an array of numbers where each new number is three times as big as
# its original number (e.g., [3, 6, 9])

def three_times_each(numbers)
    answer = []
    numbers.each do |num|
        answer << num * 3
    end
    return answer
end

# print three_times_each(nums)

def three_times_map(numbers)
    numbers.map {|num| num * 3 }
end

# print three_times_map(nums)


# 2.  Find the first number that is divisible by 7

def divis_by_7_each(nums)
    nums.each do |num|   
        if num % 7 == 0
            return num
        end
    end
end

# print divis_by_7_each(nums)

def divis_by_7_find(nums)
    nums.find do |num|
        num % 7 == 0
    end
end

# print divis_by_7_find(nums)

# 3.  Find all numbers that are divisible by 7

def all_divis_by_7(nums)
    nums.select do |num|
        num % 7 == 0
    end

end

# print all_divis_by_7(nums)

# 4.  Find the first number that is divisible by 7 AND greater than 10

def big_divis_by_7(nums)
    my_number = nums.find do |num|
        num % 7 == 0 && num > 10
    end
    puts "My number is #{my_number}"
    return my_number

end

# print big_divis_by_7(nums)
# Bonus:


# 5.  Create an array of the squares (the number times itself) of all numbers
# that are divisible by 7

def squares_divis_by_7(nums)
    # find the numbers divisible by 7
    # multiply each one by itself (i.e., square it)
    nums.select do |num|
        num % 7 == 0
    end.map do |num|
        num ** 2
    end

end

print squares_divis_by_7(nums)











