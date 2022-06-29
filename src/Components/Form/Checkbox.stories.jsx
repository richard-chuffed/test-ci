import React from "react";
import Checkbox from "./Checkbox";

export default {
    title: "Input/Checkbox",
    component: Checkbox,
}
const register = () => {
  return [];
}

const Template = (args) => <Checkbox {...args} />

export const Default = Template.bind({});
Default.args = {
    label: "Check Me",
    register: register
}