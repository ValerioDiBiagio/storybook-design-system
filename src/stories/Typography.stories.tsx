// Importare i tipi Meta e StoryObj dalla libreria React di Storybook
import type { Meta, StoryObj } from "@storybook/react";

// Oggetto di metadati per la storia di Storybook.
// Questo oggetto configura come il file Thypography verrà visualizzato in Storybook.
const meta: Meta = {
    title: "Atoms/Typography",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
}

export default meta;

// Definire un tipo 'Story' basato su StoryObj di Storybook.
type Story = StoryObj<typeof meta>;

// Definire la storia 'Default' per il file Typography.
export const Default: Story = {
    args: {
        Children: "The quick brown fox"
    },
    render: ({ Children }) => <>
        <div className="font-size-hero">{Children}</div>
        <h1>{Children}</h1>
        <h2>{Children}</h2>
        <h3>{Children}</h3>
        <h4>{Children}</h4>
        <h5>{Children}</h5>
        <h6>{Children}</h6>
        <div className="font-size-body">{Children}</div>
        <div className="font-size-sm">{Children}</div>
        <div className="font-size-xs">{Children}</div>
    </>
};
