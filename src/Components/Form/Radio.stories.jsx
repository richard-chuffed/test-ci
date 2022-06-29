import React from "react";
import Radio from "./Radio";

export default {
    title: "Input/Radio",
    component: Radio,
}
const register = () => {
  return [];
}

const Template = (args) => (
  <div className="formRow">
    <Radio {...args} label="Check Me" name="radiostory" value="yes" />
    <Radio {...args} label="Check Me Not" name="radiostory" value="no" />
  </div>
)

export const Default = Template.bind({});
Default.args = {
    register: register,
    classes: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 ml-5"
}