import React from "react";
import Submit from "./Form/Submit";

export default {
    title: "Input/Submit",
    component: Submit,
}

const Template = (args) => <Submit {...args} />

export const Default = Template.bind({});
Default.args = {
    value: "Press Me",
    classes: "primary"
}