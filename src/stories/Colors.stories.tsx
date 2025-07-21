// Importare i tipi Meta e StoryObj dalla libreria React di Storybook
import type { Meta, StoryObj } from '@storybook/react';

// Oggetto di metadati per la storia di Storybook.
// Questo oggetto configura come il file Colors verrà visualizzato in Storybook.
const meta: Meta = {
    title: 'Atoms/Colors',
    tags: ['autodocs']
}

export default meta;

// Definire un tipo 'Story' basato su StoryObj di Storybook.
type Story = StoryObj<typeof meta>;

// Definire la storia 'Default' per il file Colors.
export const Default: Story = {
    render: () =>
        <div>
            <style>
                {`
                    
                .container {
                display: grid;
                grid-template-columns: repeat(10, 1fr);
                height: 3rem;
                margin-bottom: var(--spacing-lg);
                }

                .info {
                padding: var(--spacing-md);
                backgroud-color: var(--color-gray-5);
                color: var(--color-gray-10);
                margin-bottom: var(--spacing-lg);
                border: 1px solid var(--color-gray-3);
                border-radius: var(--border-radius-sm, 0.25rem);
                }
                
                `}
            </style>

            <h1>Colors</h1>
            <h2>Gray</h2>
            <div className="container">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="info"
                        style={{ backgroundColor: `var(--color-gray-${index})` }}
                        key={index}
                    />
                ))}

            </div>

            <h2>Red</h2>
            <div className="container">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="info"
                        style={{ backgroundColor: `var(--color-red-${index})` }}
                        key={index}
                    />
                ))}

            </div>

            <h2>Green</h2>
            <div className="container">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="info"
                        style={{ backgroundColor: `var(--color-green-${index})` }}
                        key={index}
                    />
                ))}

            </div>
        </div>
}