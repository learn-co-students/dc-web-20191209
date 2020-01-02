require 'pry'

class PalindromeChecker

    def is_palindrome?(word)
        if !word.is_a?(String)
            raise ArgumentError
        end
        word.downcase!
        word = word.gsub(/[^0-9a-z]/i, '')
        if word.length <= 1 
            return true
        else
            if word[0] == word[-1]
                return is_palindrome?(word.slice(1...-1))
            else
                return false
            end
        end
    end
end


