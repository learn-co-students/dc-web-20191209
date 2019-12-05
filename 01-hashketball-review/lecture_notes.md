- explain "Flipped Classroom":  We expect you to see the material before lecture (although not master)

- emphasize asking questions, feeling stupid, saying "I don't know".  Talk about Imposter Syndrome

- Coding along is difficult and may not be the best way to learn.  If you choose to, you can pull code at any time.
  - At this point, show how to clone down entire lecture repo.  Also discuss fork vs clone

- Video and code made available after lecture

- rspec; rspec --fail-fast
    - can run a specific file: `spec/rspec hashketball_spec.rb`
    - or a specific test: `spec/rspec hashketball_spec.rb:29`

- Programmers are lazy, by design

- Don't cut and paste, both for understanding and for muscle memory

- TDD - what is it?

- Don't do too much at once--tight feedback loop.  Success is often defined as a new error.

- My data is set up differently:  Players are an array of hashes as opposed to one hash with player names as keys

- Define `num_points_scored`.  When you get to the second test, a lot of code is going to end up being repeated.  Define `get_all_players` and `get_player_info` as "helper methods"

- Discuss `map` vs `each`, `select` vs `find`.  Do some examples with numbers and stuff.  Note that they all leave the original array unchanged

```rb
instructors = [
  {name: "Paul", role: "lead"},
  {name: "Jake", role: "TCF"},
  {name: "Melanie", role: "TCF"}
]
```
`map` for when you are returning an array of equal size

`each` returns the original array

Student Exercise:  
- # Define a method called get_names that takes an array of instructors and returns just their names.  Try it with `.each` and then `.map`

```rb

names = instructors.map do |instructor|
  instructor[:name]
end

names
```


`select` returns an array of all matching elements

`find` returns first

Student Exercise:  
- # Define a method called find(name) that takes an array of instructors and returns the instructor whose name matches the inputed parameter
- # Define a method called  find_all_starts_with_

- Build helper methods:

```rb
def get_all_players
# returns array of each player's hash
  game_hash.values.map do |team|
    team[:players]
  end.flatten

end

def get_player_info(name)
# takes a name and returns the hash for that player
  get_all_players.find {|player| player[:player_name]==name}

end
```

- Define 'refactoring'