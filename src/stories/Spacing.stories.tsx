import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
    title: "Atoms/Spacing",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    render: () => <div>Spacing</div>
};