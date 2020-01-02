require_relative "../palindrome.rb"

# describe "Test the tests" do 

#     it "can add 2 + 2" do 
#         expect(2+2).to eq(5)
#     end

# end

describe "PalindromeChecker" do 

    let (:checker) {PalindromeChecker.new}

    it "returns true when input is 'racecar'" do 
        expect(checker.is_palindrome?('racecar')).to be(true)
    end

    it "returns false when input is 'broccoli'" do 
        expect(checker.is_palindrome?('broccoli')).to be(false)
    end

    it "returns true when input is 'madam'" do 
        expect(checker.is_palindrome?('Madam')).to be(true)
    end

    it "returns true when input is 'm!ada!m'" do 
        expect(checker.is_palindrome?('m!ada!m')).to be(true)
    end

    it "returns true when input is 'go hang a salami im a lasagna hog'" do
        expect(checker.is_palindrome?('go hang a salami im a lasagna hog')).to be(true)
    end

    it "returns true when input is 'm@ada!m'" do 
        expect(checker.is_palindrome?('m@ada!m')).to be(true)
    end

    it "raises ArgumentError when input is []" do 
        expect{checker.is_palindrome?([])}.to raise_error(ArgumentError)
    end
end


