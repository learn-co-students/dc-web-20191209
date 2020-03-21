let idTracker = 1;

export default function manageWord(state = { words: [] }, action) {
  switch (action.type) {
    case "ADD_WORD":
      let word = {
        id: idTracker,
        img_url: action.payload.img_url,
        name: action.payload.name
      };
      idTracker++;
      console.log(word);
      return { ...state, words: [...state.words, word] };
    case "DELETE_WORD":
      let filteredWords = state.words.filter(
        word => word.id !== action.payload
      );
      return { ...state, words: filteredWords };
    default:
      return state;
  }
}
