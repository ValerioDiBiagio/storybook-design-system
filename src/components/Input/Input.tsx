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

type InputProps = {
    kind: "text" | "email" | "password";
} & React.InputHTMLAttributes<HTMLInputElement>;

type SelectProps = {
    kind: "select";
    options: { label: string; value: string }[];
    placeholder?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

type GeneralInputProps = (InputProps | SelectProps) & {
    label: React.ReactNode;
};

export const InternalInput: React.FC<InputProps | SelectProps> = (
    props
) => {
    switch (props.kind) {
        case "select":
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
        default:
            return <input type={props.kind} {...props} />;
    }
};

export const Input: React.FC<GeneralInputProps> = ({ label, id, ...props }) => {
    const defaultId = React.useId() || id;

    return (
        <>
            <label htmlFor={defaultId}>{label}</label>
            <InternalInput {...props} id={defaultId} />
        </>
    )
};