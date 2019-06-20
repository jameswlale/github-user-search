import React from "react";
import { shallow, mount } from "enzyme";
import Org from "./Org";
import Avatar from "../Avatar/Avatar";

it("renders without crashing", () => {
  shallow(
    <Org
      avatar_url="https://avatars3.githubusercontent.com/u/69631?v=4"
      login="facebook"
      url="https://api.github.com/orgs/facebook"
    />
  );
});

it("renders without crashing", () => {
  const wrapper = mount(
    <Org
      avatar_url="https://avatars3.githubusercontent.com/u/69631?v=4"
      login="facebook"
      url="https://api.github.com/orgs/facebook"
    />
  );


  expect(wrapper.find("h3").text()).toEqual("facebook");
  expect(wrapper.find(".org_url").getDOMNode().getAttribute("href")).toEqual("https://api.github.com/orgs/facebook");
  expect(wrapper.find(Avatar).prop("src")).toEqual("https://avatars3.githubusercontent.com/u/69631?v=4");
});
