Tree.destroy_all
User.destroy_all
Favorite.destroy_all

trees = [
    {common_name: "American sycamore", binomial_name: "platanus occidentalis", category: "deciduous", image: "https://s3.amazonaws.com/cdn0.gurneys.com/images/500/04487.jpg"},
    {common_name: "Red oak", binomial_name: "quercus rubra", category: "deciduous", image: "https://shop.arborday.org/data/default/images/catalog/600/Turnkey/1/4-877.jpg"},
    {common_name: "Loblolly pine", binomial_name: "pinus taeda", category: "coniferous", image: "https://www.knobhilldriving.com/wp-content/uploads/2018/12/giant-loblolly-pine-tree-growing-over-oak-trees-600x600_1.jpg"},
    {common_name: "Red maple", binomial_name: "acer rubrum", category: "deciduous", image: "https://cdn10.bigcommerce.com/s-z923x0f/products/1945/images/2380/file_395_11__26229.1455553048.800.1280.jpg?c=2"},
    {common_name: "Chinese elm", binomial_name: "ulmus parvifolia", category: "deciduous", image: "https://cdn.shopify.com/s/files/1/1008/4432/products/Chinese_Elm_2.jpg?v=1543343725"},
    {common_name: "River birch", binomial_name: "betula nigra", category: "deciduous", image: "https://shop.arborday.org/data/default/images/catalog/600/Turnkey/1/4-792.jpg"},
    {common_name: "Tuliptree", binomial_name: "liriodendron tulipfera", category: "deciduous", image: "https://www.alsipnursery.com/wp-content/uploads/2019/04/1805197a.jpg"},
    {common_name: "Pin oak", binomial_name: "quercus palustris", category: "deciduous", image: "https://images.homedepot-static.com/productImages/55c7e946-e860-423f-9340-5d868684cf80/svn/shrubs-bushes-hd7102-64_1000.jpg"},
    {common_name: "Eastern redbud", binomial_name: "cercis canadensis", category: "deciduous", image: "https://shop.arborday.org/data/default/images/catalog/600/Turnkey/1/5-912.jpg"},
    {common_name: "Eastern white pine", binomial_name: "pinus strobus", category: "coniferous", image: "https://shop.arborday.org/data/default/images/catalog/600/Turnkey/1/ep-1-903.jpg"},
    {common_name: "Crape myrtle", binomial_name: "lagerstroemia indica", category: "deciduous", image: "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/CHEROKEE-CRAPE-MYRTLE-800-MAINIMAGE-FGT_1024x1024.gif?v=1550096584"},
    {common_name: "Southern wax myrtle", binomial_name: "myrica cerifera", category: "deciduous", image: "https://treasurecoastnatives.files.wordpress.com/2012/02/myr-close2.jpg?w=300&h=300"},
    {common_name: "Pawpaw", binomial_name: "asimina triloba", category: "deciduous", image: "https://images.squarespace-cdn.com/content/v1/59d3dc2549fc2ba55d7e838b/1511762811640-UPAZPEUU5W6COG07XYH6/ke17ZwdGBToddI8pDm48kITWbvzGC-kVAmZO_v4guVJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaEWkoFrW0fwY1Eft-yl-Z_D9EWwON2IAPePrrRBOw9QnPzR0nrfinS3CiGrQlulfw/beautiful+cluster+of+pawpaws.jpg"},
    {common_name: "Shagbark hickory", binomial_name: "carya ovata", category: "deciduous", image: "https://images-na.ssl-images-amazon.com/images/I/81kGQNVE3UL._SX425_.jpg"},
    {common_name: "Water oak", binomial_name: "quercus nigra", category: "deciduous", image: "https://705254.smushcdn.com/1559413/wp-content/uploads/2019/11/Water-Oak-1.jpg?size=429x429&lossy=1&strip=1&webp=1"}
]

users = [
    {name: "Shannon Nabors", username: "snabes", image: "https://ca.slack-edge.com/T02FZRG24-ULFE2EN01-648b4306b95a-512"},
    {name: "JC Chang", username: "starwarsrules", image: "https://ca.slack-edge.com/T02MD9XTF-UE5CZSUP2-0b77d569bba5-512"},
    {name: "Chine Anikwe", username: "canikwe", image: "https://ca.slack-edge.com/T02MD9XTF-UF7M8FHNW-500bb2739751-512"},
    {name: "Ann Duong", username: "ilovebts", image: "https://ca.slack-edge.com/T02MD9XTF-UB0UGTCV7-b9d6ef0a0320-512"},
    {name: "Bill Nye", username: "scienceguy", image: "https://news.missouri.edu/wp-content/uploads/2014/03/Bill-Nye_globe.jpg"},
    {name: "Trevor Jameson", username: "trevor", image: "https://ca.slack-edge.com/T02MD9XTF-UCBRBPPU3-e8f57fa830fb-512"},
    {name: "Paul Nicholsen", username: "starwarsisbad", image: "https://ca.slack-edge.com/T02MD9XTF-U9ZRW52TY-5f1673160915-512"},
    {name: "Anthony Gregg", username: "antman", image: "https://ca.slack-edge.com/T02MD9XTF-UF96D2RKQ-03884e9b2254-512"},
    {name: "Beyonce Knowles", username: "beyonce", image: "https://img.discogs.com/bh_o4SQHQrtPAzOlB2GUTMPiflU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-52835-1562786676-4551.jpeg.jpg"},
    {name: "Shinik Cupo", username: "scupo", image: "https://ca.slack-edge.com/T02MD9XTF-UE6PUBAKB-6f08cd10c428-512"},
    {name: "Artem Metelskyi", username: "metart", image: "https://ca.slack-edge.com/T02MD9XTF-UF9GTBFL6-6f1204b8f8f0-512"},
    {name: "James Clement", username: "jclement", image: "https://ca.slack-edge.com/T02MD9XTF-UF67C3QBZ-20c6dcaee1cf-512"},
    {name: "Buffy Summers", username: "slayer", image: "https://i.pinimg.com/originals/70/08/7d/70087de30277930eca724ad947def727.jpg"},
    {name: "Andrea Williams", username: "Andrea", image: "https://ca.slack-edge.com/T02MD9XTF-UF7H2SC4B-334466c4ee5d-512"},
    {name: "Hai Nguyen", username: "ohhaithere", image: "https://ca.slack-edge.com/T02MD9XTF-UF4TXD4QK-99d150e05c75-512"},
    {name: "Heloise Taillet", username: "HT", image: "https://ca.slack-edge.com/T02MD9XTF-UF89ULMML-a8b01fb307e4-512"},
    {name: "Ross Jones", username: "rosstheboss", image: "https://ca.slack-edge.com/T02MD9XTF-UF5RP12V9-d6be8c99ae80-512"},
    {name: "Stephen Colbert", username: "colbert", image: "https://d.newsweek.com/en/full/1501825/comedian-stephen-colbert.jpg?w=1600&h=1600&q=88&f=ac013ed680c8a8b0c001b3a0e2be469a"},
    {name: "Ryan Gill", username: "Ryguy", image: "https://ca.slack-edge.com/T02MD9XTF-UF759AJ2D-0f8a5bff6441-512"}
]

users.each do |user|
    User.create(user)
end

trees.each do |tree|
    Tree.create(tree)
end