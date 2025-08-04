import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../components/Tabs/Tabs";
import root from "react-shadow";
import { Badge } from "../components/Badge/Badge";

// Definisce i metadati per il componente Tabs in Storybook
const meta: Meta<typeof Tabs> = {
    title: "Components/Tabs",
    component: Tabs,
    tags: ["autodocs"]
};

export default meta;

// Definisce il tipo per una storia di Storybook, inferendo le props dal componente Tabs
type Story = StoryObj<typeof Tabs>;

// Un componente funzionale chiamato Skeleton che fornisce un contenitore stilizzato per il contenuto delle tab.
// Utilizza `react-shadow` per incapsulare i suoi stili all'interno di un Shadow DOM.
const Skeleton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <root.div>
            <style>{`
				div {
					text-align: center;
					background-color: light-dark(var(--color-gray-1), var(--color-gray-15));
					border-radius: var(--border-radius-md, 0.5rem);
					width: 30rem;
					max-width: 100%;
					min-height: 4rem;
					margin-bottom: 1rem;
					align-content: center;
				}
			`}</style> {/* Stili applicati all'interno dello Shadow DOM */}
            <div>{children}</div> {/* Renderizza i figli all'interno del div stilizzato */}
            <div /> {/* Div vuoti aggiuntivi per layout/scopi visivi */}
            <div />
            <div />
        </root.div>
    );
};

// Definisce la storia predefinita per il componente Tabs
export const Default: Story = {
    // La funzione render descrive come viene renderizzata la storia
    render: () => (
        <Tabs>
            <Tabs.Item label="Label 1">
                <Skeleton>Tab content 1</Skeleton>
            </Tabs.Item>
            <Tabs.Item label="Label 2">
                <Skeleton>Tab content 2</Skeleton>
            </Tabs.Item>
            <Tabs.Item label="Label 3">
                <Skeleton>Tab content 3</Skeleton>
            </Tabs.Item><Tabs.Item
                label={
                    <span>
                        Label 3 <Badge>New</Badge>
                    </span>
                }
            >
                <Skeleton>Tab content 3</Skeleton>
            </Tabs.Item>
            <Tabs.Item
                label={
                    <span>
                        Label 4 <Badge variant="positive">Positive</Badge>
                    </span>
                }
            >
                <Skeleton>Tab content 4</Skeleton>
            </Tabs.Item>
            <Tabs.Item
                label={
                    <span>
                        Label 5 <Badge variant="negative">Negative</Badge>
                    </span>
                }
            >
                <Skeleton>Tab content 5</Skeleton>
            </Tabs.Item>
        </Tabs>
    ),
};