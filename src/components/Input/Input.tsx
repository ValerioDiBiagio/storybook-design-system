/* 
<Input kind="text" placeholder="Placeholder" label="Label" name="name" /> 
<Input kind="select" label="Label" name="name" options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
        ]}
    />
*/

import React from "react";

type InputProps = {
    kind: "text" | "email" | "password";
    label: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

type SelectProps = {
    kind: "select";
    label: React.ReactNode;
    options: { label: string; value: string }[];
    placeholder?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Input: React.FC<InputProps | SelectProps> = ({ label, id, ...props }) => {
    const defaultId = React.useId() || id;

    return (
        <>
            <label htmlFor={defaultId}>{label}</label>
            {props.kind === "select" ? (
                <select {...props} id={defaultId}>
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
            ) : (
                <input id={defaultId} type={props.kind} {...props} />
            )}
        </>
    )
};