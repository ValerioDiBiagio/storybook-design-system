/* 
<Input kind="text" placeholder="Placeholder" label="Label" name="name" /> 
<Input kind="select" label="Label" name="name" options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
        ]}
    />
    <Input kind="radio" label="Label" name="name" options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
        ]}
    />
*/

import React from "react";

// ### Tipi di proprietà per i diversi tipi di input

// Definisce le props per gli input di tipo "text", "email", "password".
// Estende `React.InputHTMLAttributes<HTMLInputElement>` per includere tutte le props standard di un `<input>`.
type InputProps = {
    kind: "text" | "email" | "password";
} & React.InputHTMLAttributes<HTMLInputElement>;

// Definisce le props per l'input di tipo "select".
// Estende `React.SelectHTMLAttributes<HTMLSelectElement>` per le props standard del `<select>`.
type SelectProps = {
    kind: "select";
    options: { label: string; value: string }[];
    placeholder?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

// Definisce le props per gli input di tipo "radio".
// `placeholder` viene impostato su `never` per prevenire l'uso accidentale con i radio.
// Estende `React.InputHTMLAttributes<HTMLInputElement>` per le props standard del `<input>`.
type RadioProps = {
    kind: "radio";
    options: { label: string; value: string }[];
    placeholder?: never;
    name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

// Unisce tutti i tipi di props (`InputProps`, `SelectProps`, `RadioProps`)
// e aggiunge la prop `label` che sarà usata nel componente `Input`.
type GeneralInputProps = (InputProps | SelectProps | RadioProps) & {
    label: React.ReactNode;
};

// ### Componente InternalInput

// `InternalInput` è il componente interno che gestisce il rendering
// dell'elemento HTML corretto (`<input>`, `<select>`, o un gruppo di `<input type="radio">`)
// in base al valore della prop `kind`.
export const InternalInput: React.FC<InputProps | SelectProps | RadioProps> = (props) => {
    // Utilizza uno switch per determinare il tipo di input da renderizzare.
    switch (props.kind) {
        case "select":
            // Renderizza un elemento `<select>`.
            // L'operatore spread `{...props}` passa tutte le props ricevute,
            // che sono già filtrate dai tipi definiti in `SelectProps`.
            return (
                <select {...props}>
                    {props.placeholder && (
                        <option value="" disabled selected>
                            {props.placeholder}
                        </option>
                    )}
                    {props.options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            );
        case "radio":
            // Renderizza un gruppo di input di tipo radio.
            // Mappa l'array di `options` per creare un `<input type="radio">`
            // all'interno di una `<label>` per ogni opzione.
            // L'etichetta esterna per i radio viene gestita nel componente `Input`.
            return (
                <>
                    {props.options.map((option) => (
                        <label key={option.value}>
                            {/* L'operatore spread `{...props}` qui passa le props comuni a `RadioProps`, */}
                            {/* ma sovrascrive `value` con quello dell'opzione corrente. */}
                            <input type="radio" {...props} value={option.value} />
                            {option.label}
                        </label>
                    ))}
                </>
            );
        default:
            // Caso di default per "text", "email", "password".
            // Renderizza un semplice elemento `<input>`.
            // L'operatore spread `{...props}` passa tutte le props standard, inclusi `type` e `id`.
            return <input type={props.kind} {...props} />;
    }
};

// ### Componente Input

// `Input` è il componente pubblico che incapsula `InternalInput`.
// È responsabile di gestire l'etichetta (`label`) e l'ID dell'input.
export const Input: React.FC<GeneralInputProps> = ({ label, id, ...props }) => {
    // Utilizza `React.useId()` per generare un ID univoco e stabile se `id` non è fornito.
    const defaultId = React.useId() || id;

    return (
        <>
            {props.kind === "radio" ? (
                <span>{label}</span>
            ) : (
                <label htmlFor={defaultId}>{label}</label>
            )}
            {/* Passa tutte le props rimanenti a `InternalInput` e aggiunge l'ID generato. */}
            <InternalInput {...props} id={defaultId} />
        </>
    );
};