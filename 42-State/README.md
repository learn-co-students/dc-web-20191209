# State
- Represents things that change about the DOM
- State is similar to props, but it is private and fully managed by the class component (can't be functional)

## Where to Put State?
- Single Source of truth
	- A comment ancestor between all components that 'touch' on this state
	- data can only flow from parent to child, not sibling components
- Set up the state object using this.state in the constructor
	- or outside the constructor

## Informational Flow
- Parent communicates to child by passing props
- How does child communicate with parent?
	- State Changing Callback!!
- Use this.setState({}) to modify state
  - works asynchronously

## DOM
- When does the DOM get re-rendered?

## Conditional Rendering



## Designing State
- be as minimal as possible 

## Controlled Forms and Event Callback handlers
- State represent things on your DOM that can change
- Forms are things on the DOM that can change

A good practice is to have all forms/inputs control state
 - and in turn, the state should control the form!
 - no more document.querySelector to get values because data is always in the state!


### Mod 3 Thinking:
 - When <some event> happens, I want to manipulate the DOM <how>?

### Mod 4 Thinking:
 - When <some event> happens, I want to manipulate state in order to manipulate the DOM



## On Your Own
- practice working with other input types (textarea, select, checkbox, radio button)
- https://reactjs.org/docs/forms.html















`<div className="right menu">
  <div className="item">
    <input className="ui search" placeholder="Search..." />
  </div>
</div>`




`<div class="ui card">
	<div>
		<img src="https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg">
	</div>
	<p>Portrait of a Carthusian by Petrus Christus</p>
	<p>Height: 11.5 x Width: 8.5</p>
</div>`
