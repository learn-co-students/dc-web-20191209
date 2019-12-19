require 'active_support/inflector'


class DatabaseModel

    def self.table_name 
        return self.name.downcase.pluralize
    end

    def self.all
        sql = <<-SQL
            SELECT * FROM #{self.table_name} 
        SQL
        thing_array = DB.execute(sql)
        thing_array.map do |row|
            self.make_thing_from_row(row)
        end
    end

    def self.make_thing_from_row(row)
        name = row[1]
        id = row[0]
        self.new(name, id)
    end

end

