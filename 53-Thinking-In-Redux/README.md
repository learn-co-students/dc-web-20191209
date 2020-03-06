# Thinking in Redux

## Overview

Our goal today is to add redux to an existing app. We'll cover:

- `mapDispatchToProps`
- `combineReducers`
- Action Creators

So far, we've only used redux in a tiny sample application. Let's refactor our paintr app to use redux!

The steps we'll follow when we're thinking in Redux resemble our Thinking In React steps.

0. Set up redux (npm install, createStore and the reducer), react-redux plumbing (Provider)
1. Figure out the "shape" of your state
  - "Shape" = keys and the _types_ of their values, e.g. { count: number, friends: [string] }
  - Decide initial values
2. Add 'static' version of state using Redux
  - Create 'default' reducers with initial values (or maybe mock data)
  - Connect state to components with `mapStateToProps`
3. Figure out how state changes over time
  - List the actions that will be triggered in your app
  - Decide how your state should change in response to each action
4. Implement actions and reducers
  - Write action creators
  - Write cases in reducers that correspond to each action
  - Connect actions to components with `mapDispatchToProps`

## Things that need fixing
 X Searchbar
 X PaintingList
 X PaintingDetail

```
function updatePaintingInfo(payload){
  return {type: "UPDATE_PAINTING_INFO", payload }
}
```
```
case "UPDATE_PAINTING_INFO":
  return oldState.map(painting => {
    if(painting.id === action.payload.paintingId){
      return {
        ...painting,
        title: action.payload.title,
        artist: {
          ...painting.artist,
          name: action.payload.name,
          birthday: action.payload.birthday,
          deathday: action.payload.deathday
        }
      }
    }
    return painting
  })
```

## mapDispatchToProps special syntax
