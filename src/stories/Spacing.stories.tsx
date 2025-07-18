import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

// Definire i metadati per Storybook, come il titolo della storia e le configurazioni di layout.
const meta: Meta = {
    title: "Atoms/Spacing",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"]
};

export default meta;

// Definire il tipo per le storie di Storybook basato sui metadati.
type Story = StoryObj<typeof meta>;

// Componente funzionale React per calcolare e visualizzare il valore di una variabile CSS.
const SpaceCalc = ({ value }: { value: string }) => {

    const spacing = React.useMemo(() => {

        const bodyStyle = window.getComputedStyle(document.body);
        return bodyStyle.getPropertyValue(value);
    }, [value])

    return <span>{spacing}</span>;
}

// Componente funzionale React che inserisce stili CSS globali tramite un tag <style>.
const Style: React.FC = () => {

    return (
        <style>
            {
                ` h1, p {
                    text-align: start;
                    max-width: calc(550rem/16); 
                }
                
                dl {
                font-size: 1rem;
                border: 1px solid #ccc;
                display: grid;
                max-width: calc(550rem/16);
                grid-template-columns: 1fr 4fr 1fr;
                border-bottom: none;
                border-radius: 0.5rem;
                }

                dt {
                font-weight: 600;
                padding: var(--spacing-sm) var(--spacing-md);
                border-bottom: 1px solid #ccc;
                border-right: 1px solid #ccc;
                }

                dd {
                padding: var(--spacing-sm) var(--spacing-md);
                border-bottom: 1px solid #ccc;
                font-family: monospace;
                display: grid;
                gap: 1ch;
                grid-template-columns: subgrid;
                grid-column: 2/4;
                align-items: center;
                }
                
                .info {
                background: magenta;
                height: 2ch;
                width: var(--story-spacing);
                display: block;
                }`
            }
        </style>
    )
}

// Definizione della storia "Default" per il componente Spacing in Storybook.
export const Default: Story = {
    render: () => (
        <>
            <h1>Spacing</h1>
            <p className="font-size-body">Our spacing variables use a mechanism to ensure that the spacing is scalable accross different screen size. * This is done by using the `clamp()` function. * The minimum viewport width is 400px and the maximum is 1200px.</p>

            <Style />

            <dl>
                {['zero', 'xs', 'sm', 'md', 'lg', 'xl'].map((key) => (
                    <React.Fragment key={key}>
                        <dt>{key}</dt>
                        <dd style={{ ['--story-spacing' as any]: `var(--spacing-${key})` }}>
                            <span>
                                <SpaceCalc value={`--spacing-${key}`} />
                            </span>
                            <span className="info" />
                        </dd>
                    </React.Fragment>
                ))}
            </dl>
        </>
    )
};