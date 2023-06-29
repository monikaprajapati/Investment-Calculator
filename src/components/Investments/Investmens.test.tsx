import * as React from "react";
import { shallow } from "enzyme";
import Investments from "./Investments";

describe("InvestmentItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Investments />);
    expect(wrapper).toMatchSnapshot();
  });
});
