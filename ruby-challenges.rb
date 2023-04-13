# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

#create function called is_even
def is_even(num)
#use modulos operator to figure out if the num is even or odd
  if num % 2 == 0
    p "#{num} is even"
    #string interpolate
else 
    p "#{num} is odd"
    #string interpolate
  end
end
#call the function with the 3 given values
is_even(7)
is_even(42)
is_even(221)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels(string)
    #create function called no_vowels
    string.delete('aeiouAEIOU')
    #use delete method to delete all vowels
end 
#call the function on the 3 given strings
p no_vowels ('Rubber Soul')
p no_vowels ('Sgt Pepper')
p no_vowels ('Abbey Road')


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome(string)
    #create palindrome function
      if string.downcase! == string.reverse
        #check to see if the sting reversed is equal to the string. Use downcase method to get the right casing.
        #if downcase isnt used it will not recognize the palindrome.
        #also if the bang operator isnot used it wont recognize the palindrome
        "#{string} is a palindrome"
      else
        "#{string} is not a palindrome"
        #string interpolate
      end
    end
    #call the function on the 3 strings
    p palindrome("Racecar")
    p palindrome("LEARN")
    p palindrome("Rotator")