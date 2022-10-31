import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@ds/button";

export default {
    title: "Button",
    component: Button,
    args: {
        children: "Click",
    },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Big: StoryObj<ButtonProps> = {
    args: {
        size: "big",
    },
};
