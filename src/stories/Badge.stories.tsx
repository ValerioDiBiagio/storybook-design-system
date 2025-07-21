// Importare i tipi Meta e StoryObj dalla libreria React di Storybook
import type { Meta, StoryObj } from "@storybook/react";

// Importare il componente Badge dal suo percorso definito
import { Badge } from "../components/Badge/Badge";

// Oggetto di metadati per la storia di Storybook.
// Questo oggetto configura come il componente Badge verrà visualizzato in Storybook.
const meta: Meta<typeof Badge> = {
    title: "Badge",
    component: Badge,
    argTypes: {
        children: { control: "text" }
    },
    args: {
        children: "Badge"
    },
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
}

export default meta;

// Definire un tipo 'Story' basato su StoryObj di Storybook,
type Story = StoryObj<typeof meta>;

// Definire la storia 'Default' per il componente Badge.
export const Default: Story = {
    render: ({ children, variant }) => <Badge variant={variant} >{children}</Badge>
};

// Definire la storia di tutte le versioni dei Badge.
export const AllBadges: Story = {
    render: ({ children }) =>
        <>
            <div style={{ display: "flex", gap: "var(--spacing-sm)" }}>
                <Badge variant="neutral" >{children}</Badge>
                <Badge variant="positive" >{children}</Badge>
                <Badge variant="negative" >{children}</Badge>
            </div>
        </>
};

