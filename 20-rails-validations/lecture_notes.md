First talk about `Proc`s.  A `Proc` is a type of "Closure", which is a reusable block of code.  It's basically a tiny function.

Example:

```rb
def gen_times(factor)
  return Proc.new {|n| n*factor }
end

times3 = gen_times(3)
times5 = gen_times(5)

times3.call(12)               #=> 36
times5.call(5)                #=> 25
times3.call(times5.call(4))   #=> 60
```

* Why use validations
    - Users are dumb (show gif)

- Different types of validations.  Model level validations are database-agnostic and use the power of ActiveRecord

* What's important about our snacks?
    - shouldn't have duplicate info

# snack.rb
```
  validates :name, presence: true
  validates :calories, presence: true
  validates :deliciousness, presence: true
```
  - Snack should have name, calories, deliciousness
  - Why bother with `deliciousness` if there's no way to _not_ put in a value in the form based on the dropdown?
      - Answer:  Forms are just one way to add data (console, data migrations, seeds, etc)
  - Show failure in console (works with new, not with create--validations fire on save, i.e., when it hits the database)
  - show `snack.errors`; `snack.errors.messages`
  - `belongs_to` is automatically set to `belongs_to :retailer, optional: false`.  Override this by setting to true

    - Demonstrate behavior in browser and necessity for feedback

#snacks_controller.rb
```rb
  def create
    @snack = Snack.new(accepted_params)
    if @snack.valid?
      @snack.save
      redirect_to snack_path(@snack)
    else
      render :new
    end
  end
```

# edit_form.erb

```rb
<% if @snack.errors %>
    <ul class="error_list">
    <% @snack.errors.full_messages.each do |message| %>
        <li><%= message %></li>
    <% end %>
    </ul>
<% end %>
```

  - can show inline styling and stylesheets
  - bad fields get turned into `field_with_errors`

```
.field_with_errors {
    color: red;
    display: inline;
}

.error_list li {
    color: red;
}
```


# retailer.rb

```rb
class Retailer < ApplicationRecord
    has_many :snacks
    accepts_nested_attributes_for :snacks, reject_if: Proc.new { |attributes| attributes[:name].blank? }

    validates :name, presence: true, uniqueness: true
    validates :year_established, presence: true
    validate :year_established_must_be_valid,
        unless: Proc.new {|a| a.year_established.blank?}

    def year_established_must_be_valid
        if !(self.year_established > 1800 && self.year_established <= Date.today.year)
            errors.add(:year_established, "must be between 1800 and #{Date.today.year}")
        end
    end

end
```

# retailer_controller.rb
```rb
  def create
    @retailer = Retailer.create(strong_params)
    if @retailer.errors
      @retailer.snacks.build
      render :new
    else
      redirect_to retailer_path(retailer)
    end
  end
```

# Use partials!

`shared/_errors.html.erb` **Note the underscore--it's actually important**

```rb
<% if new_object.errors %>
    <ul class="error_list">
    <% new_object.errors.full_messages.each do |message| %>
        <li><%= message %></li>
    <% end %>
    </ul>
<% end %>
```

form pages:
```rb
<%= render partial: "shared/errors", locals: {new_object: @retailer} %>
```
