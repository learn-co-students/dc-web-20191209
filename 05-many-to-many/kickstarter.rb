class Backer

    attr_accessor :backed_projects, :name

    def initialize(name)
        @name = name
        @backed_projects = []
    end

    def back_project(project)
        self.backed_projects << project
        project.backers << self
    end
end

class Project

    attr_accessor :backers, :name

    def initialize(name)
        @name = name
        @backers = []
    end

    def add_backer(backer)
        backer.backed_projects << self
        self.backers << backer
    end

end

hoverboard = Project.new('Hoverboard')
marty = Backer.new("Marty McFly")

hoverboard.add_backer(marty)

puts hoverboard.backers.collect {|x| x.name}
puts marty.backed_projects.collect {|x| x.name}