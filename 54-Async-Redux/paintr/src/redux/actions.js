// action creators
const URL = "http://localhost:3000/paintings"

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", payload: value };
}

function votedForPainting(paintingId) {
  return { type: "INCREASE_VOTES", payload: paintingId };
}

function votingForPainting(paintingId) {
  return (dispatch, getState) => {
    let oldVotes = getState().paintings.find(p => p.id === paintingId).votes
    fetch(`${URL}/${paintingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({votes: oldVotes + 1})
    })
  }
}

function updatePainting({ title, name, birthday, deathday, paintingId }) {
  return {
    type: "UPDATE_PAINTING",
    payload: { title, name, birthday, deathday, paintingId}
  };
}

function fetchedPaintings(paintings) {
  return {type: "FETCHED_PAINTINGS", payload: paintings}
}

function fetchingPaintings() {
  return (dispatch) => {
    fetch(URL)
    .then(res => res.json())
    .then(paintings => {
      dispatch(fetchedPaintings(paintings))
    })
  }
}

export { changeSearchText, votingForPainting, updatePainting, fetchingPaintings };
