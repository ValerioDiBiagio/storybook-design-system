import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input/Input";

const meta: Meta = {
    title: "Components/Input",
    parameters: {
        layout: "centered",
    },
    args: {
        label: "Label",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <Input options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
    ]}
        kind="select" label="Label" placeholder="placeholder" />
}