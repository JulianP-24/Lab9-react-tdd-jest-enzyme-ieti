import { shallow } from "enzyme";
import Login from "./login";

describe("<Login/>", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toHaveLength(1);
  });
});
