// Importare i tipi Meta e StoryObj dalla libreria React di Storybook
import type { Meta, StoryObj } from "@storybook/react";

// Importare il componente Badge dal suo percorso definito
import { Badge } from "../components/Badge/Badge";

// Oggetto di metadati per la storia di Storybook.
// Questo oggetto configura come il componente Badge verrà visualizzato in Storybook.
const meta: Meta<typeof Badge> = {
    title: "Badge",
    component: Badge,
    parameters: {
        layout: "centered"
    },
}

export default meta;

// Definire un tipo 'Story' basato su StoryObj di Storybook,
type Story = StoryObj<typeof meta>;

// Definire la storia 'Default' per il componente Badge.
export const Default: Story = {
    render: () => <Badge />
};
