# Instructions

- Build index and show page for retailer
- Index page should link to show page for each retailer
- Show page should list a retailer's snacks

# Nested Attributes
    - `accepts_nested_attributes_for` on the parent model
    - update form:
```
<%= ret.fields_for :snacks do |snack| %>
    <%= snack.label :name %>
    <%= snack.text_field :name %>
    <%= snack.label :calories %>
    <%= snack.number_field :calories, step: 50 %>
    <%= snack.label :deliciousness %>
    <%= snack.select :deliciousness, (1..10) %>
<% end %>

<%= ret.submit %>
```
    - add empty snacks to controller (retailer#new):
        `@retailer.snacks.build`

    - add to strong_params:
```rb
def retailer_params
  params.require(:retailer).permit(:name, :year_established, 
      snacks_attributes: [:name, :calories, :deliciousness])
end
```