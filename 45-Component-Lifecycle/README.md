# React Component Lifecycle
- For class components that extend React.Component

## Available Methods
- http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- https://reactjs.org/docs/react-component.html

## Task Lister
- Walk through

## Lifecycle Methods only for class components

### Creation
- `componentDidMount()`
 - fetch
 - add extra event listeners
 - set up timers
 - things that require the DOM

#### Setting Initial State using Props

### Update
- `render()`
 - has a return value
 - don't update state here
- `componentDidUpdate()`

### Deletion
 - `componentWillUnmount()`
  - called right before element is removed from DOM
  - clean up things from componentDidMount

#### Where to put fetch?
- ComponentDidMount
- Event handlers

### React Hooks?

### Less used methods
- `shouldComponentUpdate()`
- `getDerivedStateFromProps()`
- `getSnapshotBeforeUpdate()`

### Deprecated Methods
- `componentWillMount()`
- `componentWillReceiveProps()`
- `componentWillUpdate()`




### Code Challenge
- you have learn everything you need to for the code challenge
- 2 hours to get as far as you can, don't have to complete
- unlimited retakes

### How should I prioritize my learning?!?!?!
- project based learning
Animal Shelter, Hogwarts - props, state, events 
Async React Mini Project, Container Components Lab - lifecycle/fetching
Pokemon Searcher, React Stock - everything labs
