* Objectives
    - Build a Rails RESTful app with full CRUD capabilities
    - Distinguish between `form_for` and `form_tag`, and use both helpers
        - form_for takes an object and pairs with attributes on the model / columns in database
        - form_tag is more generic
    - Use Rails link helpers to build links
    - Use `rails routes` to abstract URLs
    - Use "before" actions to minimize repeated code

* Questions
    <!-- - Form_for vs form_tag, how to use -->
    <!-- - how to start from nothing -->
    <!-- - csrf -- wth -->
        <!-- - cross-site request forgery -->
    - how to manage Inheritance of Models-- from ActiveRecord::Base?
    <!-- - resources routes vs manual construction -->
        - `can't modify frozen array?`
    <!-- - `create!`? -->
    <!-- - `before_action`? -->
    <!-- - `link_to` and other helpers -->


- What do we need for our first page, an index page?
    - view file (html template)
    - controller action

    - route to the page
    - create the table, migrate the table, seed data
    - create the model