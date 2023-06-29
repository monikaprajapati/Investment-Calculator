import * as React from "react";
import { shallow } from "enzyme";
import InvestmentForm from "./InvestmentForm";

describe("InvestmentForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<InvestmentForm submitHandler={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
