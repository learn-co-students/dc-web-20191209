import React from "react";
import Words from "./Words";
import Word from "./Word";
import { shallow } from "enzyme";

describe("words component", () => {
  it(" render this.props.words as Word components", () => {
    let mockProps = {
      words: [
        { id: 1, name: "puerco", img_url: null },
        { id: 2, name: "caballo", img_url: null }
      ]
    };
    let wrapper = shallow(<Words {...mockProps} />);
    expect(wrapper.find(Word).length).toBe(mockProps.words.length);
  });
});
