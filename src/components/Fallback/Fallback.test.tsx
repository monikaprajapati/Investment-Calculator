import * as React from "react";
import { shallow } from "enzyme";
import Fallback from "./Fallback";

describe("Fallback", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Fallback />);
    expect(wrapper).toMatchSnapshot();
  });
});
