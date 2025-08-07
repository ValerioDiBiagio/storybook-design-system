import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input/Input";

// La definizione `meta` è il "punto di ingresso" della storia.
// Definisce i metadati, il titolo, i parametri di layout e le props predefinite
// che verranno applicate a tutte le storie che usano questo file.
const meta: Meta = {
    // Il titolo della storia, visibile nella sidebar di Storybook.
    title: "Components/Input",

    // I parametri configurano il comportamento del rendering.
    parameters: {
        layout: "centered",
    },

    // Le `args` (argomenti) sono le props di default che verranno passate al componente.
    // In questo caso, ogni storia avrà una `label` con il testo "Label" a meno che non venga sovrascritta.
    args: {
        label: "Label",
    },

    // `tags: ["autodocs"]` abilita la generazione automatica della documentazione
    tags: ["autodocs"]
};

export default meta;

// `StoryObj` è il tipo che descrive un singolo stato (o "storia") del tuo componente.
// `typeof meta` inferisce i tipi delle props dalle impostazioni di `meta`.
type Story = StoryObj<typeof meta>;

// ### Storie

export const Default: Story = {
    render: ({ label }) => (
        <div>
            <Input label={label} kind="text" icon="Book" />
            <Input
                label={label}
                // Qui passiamo l'array di opzioni specifico per un select.
                options={[
                    { label: "Option 1", value: "1" },
                    { label: "Option 2", value: "2" },
                ]}
                kind="select"
            />
            <Input
                label={label}
                // Passiamo un array di opzioni, come per il select.
                options={[
                    { label: "Option 1", value: "1" },
                    { label: "Option 2", value: "2" },
                ]}
                kind="radio"
                // La prop `name` è obbligatoria per raggruppare i radio button.
                // Permette di selezionarne solo uno all'interno del gruppo.
                name="Mimmo"
            />
        </div>
    )
};

// `Default` è la prima storia, che mostra l'input di testo standard.
export const InputStory: Story = {
    // `render` è la funzione che Storybook usa per renderizzare il componente.
    // Riceve le props (`label` in questo caso) e restituisce il componente React.
    render: ({ label }) => <Input label={label} kind="text" />,
};

// `Select` mostra l'input di tipo select (menu a tendina).
export const Select: Story = {
    render: ({ label }) => (
        <Input
            label={label}
            // Qui passiamo l'array di opzioni specifico per un select.
            options={[
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
            ]}
            kind="select"
        />

    ),
};

// `Radio` mostra l'input di tipo radio (pulsanti a scelta singola).
export const Radio: Story = {
    render: ({ label }) => (
        <Input
            label={label}
            // Passiamo un array di opzioni, come per il select.
            options={[
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
            ]}
            kind="radio"
            // La prop `name` è obbligatoria per raggruppare i radio button.
            // Permette di selezionarne solo uno all'interno del gruppo.
            name="Mimmo"
        />
    ),
};