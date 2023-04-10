# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Otherwise known as OOP, object-oriented programming is a way to make code more organized and easier to work with. When using OOP we group similar types of data together into objects and give them names. then we can call on these objects to do certain tasks.

Researched answer: Often called OOP, object-oriented programming was created to deal with large scale projects that have many components. Over the years apps have grown in size and developers needed a way to make changes to the data without affecting the entire code. One small change in a component file could trigger a domino effect of errors, and be a pain to debug. OOP lets us section off different areas of code so that projects become a collection of small parts. Think of a puzzle, and building each corner at a time, then putting the whole thing together for a finished product.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: A float is very similar to an integer. A float is a decimal number and an integer would be a whole number. A float will give us different outputs than a whole number. For example, a integer will will always output a whole number and a float will give us a decimal.

Researched answer: A float is a number that has a decimal point and can have a fractional part. In ruby to declare a float, just write any number with a decimal point. An integer is a whole number that has no fractional parts. for example, 3 is an integer while 3.0 is a float. Floats are good for storing very small or very large values. In ruby if you want to return a non whole number you need to use a float. To show the differnce in outputs consider this... 
3 / 2  will  output 1, while 3.0 / 2 will output: 1.5. the float gave us the more precise answer.

3. Ruby has an implicit return. What does that mean? 

Your answer: An implicit return is when there is no return statement, the value of the value of the last line of the method is returned. Ruby is a language that uses implicit returns, therefore using the keyword return, is not always necessary.

Researched answer: Ruby is a language that uses implicit returns, this basically means that if there is no specified return, the value of the last method used will be returned. Implicit returns can make code shorter, but I can see how it could make it harder to read.

4. What is a block in Ruby?

Your answer: A block in ruby is a feature of ruby that passes a function through a method to determine the output. do and end are the keywords that define a block.

Researched answer: A ruby block is a snippet of code that can be passed as an argument to a method. It is an anonymous function and it is usually defined with the key words do and end. A block is a piece of code that can be passed to a method and used in the context of that method.


5. How do you extract a value in a Ruby hash?

Your answer: To extract a value from a hash in ruby you would use square brackets [] and the name of the key. It would look something like this ```    
student = Hash.new
student[:name] = 'Greg'
student[:home] = 'Minnesota'
p student[:name]
## 'Greg'

```
We extracted tha value 'Greg' by using the class of student , and the name of the key in square brackets.

Researched answer: In Ruby you extract the value from a hash by using the key that is associated with the value. The easiest way to do this is by using square brackets and the name of the key.

## Looking Ahead: Terms for Next Week

1. RSpec: RSpec is a testing frmework for Ruby. It is a behavior driven development and it allows us to describe the behavior of the code and make sure that it behaves as expected. Like all things in Ruby, RSpec is designed to be easy to read and write.

2. Test-driven development: This is a programming process that focuses on writing an automated test before writing the actual code. We saw this when working with javascript, and would test our code using jest.

3. PostgreSQL: PostgreSQL is an open sourced database management system. This means that it looks at databases through an object oriented programming lense

4. CRUD: CRUD is an acronym that stands for create, read, update, delete. These are the four general actions that are performed on data when programming. 

5. HTTP: This is a tool used for transferring data over the internet. It is the foundation of data communication on the World Wide Web and is used to enable communication between clients and servers. Whenever you type in a website name, an http request is sent to the server hosting that website.
