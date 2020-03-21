import manageWords from "./manageWords";

describe("manageWords", () => {
  // tests go here
  it("handles @@INIT", () => {
    let action = { type: "@@INIT" };
    expect(manageWords(undefined, action)).toEqual({ words: [] });
  });

  it("handles ADD_WORD", () => {
    // dummy action object with a dummy payload
    let mockState = { words: [] };
    let mockAction = {
      type: "ADD_WORD",
      payload: { name: "perro", img_url: null }
    };
    // pass dummy action to manageWords
    let result = manageWords(mockState, mockAction);
    // expect wordsArray should contain dummy payload
    expect(result.words.length).toBe(1);
  });

  it("handles DELETE_WORD", () => {
    // make a mock words array as mock state
    let mockState = {
      words: [
        { id: 1, name: "puerco", img_url: null },
        { id: 2, name: "caballo", img_url: null }
      ]
    };
    // mockId as payload
    let mockAction = { type: "DELETE_WORD", payload: 2 };
    // expect the count of array to one less than original count
    let result = manageWords(mockState, mockAction);
    expect(result.words).toBeDefined();
    expect(result.words.length).toBe(1);
  });
});
