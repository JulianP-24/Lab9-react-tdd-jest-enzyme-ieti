import { shallow } from "enzyme";
import Task from "./Tasks";

describe("<Tasks/>", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Task />);
    expect(wrapper).toHaveLength(1);
  });
});
