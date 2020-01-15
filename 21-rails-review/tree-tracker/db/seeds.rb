Tree.destroy_all
User.destroy_all
Favorite.destroy_all

trees = [
    {common_name: "American sycamore", binomial_name: "platanus occidentalis", category: "deciduous"},
    {common_name: "Red oak", binomial_name: "quercus rubra", category: "deciduous"},
    {common_name: "Loblolly pine", binomial_name: "pinus taeda", category: "coniferous"}
]

users = [
    {name: "Shannon Nabors", username: "snabes"},
    {name: "JC Chang", username: "starwarsrules"},
    {name: "Paul Nicholsen", username: "starwarsisbad"}
]

users.each do |user|
    User.create(user)
end

trees.each do |tree|
    Tree.create(tree)
end