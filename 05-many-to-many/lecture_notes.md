- Kickstarter project from yesterday had code:

```rb
class Backer

    def initialize(name)
        @name = name
        @backed_projects = []
    end

    def back_project(project)
        self.backed_projects << project
        project.backers << self
    end

class Project

    def initialize(name)
        @name = name
        @backers = []
    end

    def add_backer(backer)
        backer.backed_projects << project
        self.backers << backer
    end

end

```

What's wrong with this?  Elicit:  Double data; double methods.  Build out a method for removing a backer. 

What relationship exists between Project and Backer?  M2M Introduce concept of join table.  Build out join table and then refactor code.