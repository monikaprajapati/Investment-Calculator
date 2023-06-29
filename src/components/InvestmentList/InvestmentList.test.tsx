import * as React from "react";
import { shallow } from "enzyme";
import InvestmentList from "./InvestmentList";

describe("InvestmentList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<InvestmentList yearlyData={[]} initialInvestment={0}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
