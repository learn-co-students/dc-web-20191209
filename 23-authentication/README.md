** Authentication **

Goals:

- Use the `bcrypt` gem to add password to a `User` model
    - uncomment `bcrypt` in Gemfile
    - add `has_secure_password` to User model
    - add `password_digest` to our User table
- Add ability to create a new user through the web interface