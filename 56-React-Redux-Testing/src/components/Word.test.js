import React from "react";
import Word from "./Word";
import { createStore } from "redux";
import manageWords from "../reducers/manageWords";
import renderer from "react-test-renderer";

const mockStore = createStore(manageWords);

let mockProps = {
  word: { id: 2, name: "vaca", img_url: null, props: jest.fn() }
};

describe("Word", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Word {...mockProps} store={mockStore} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
