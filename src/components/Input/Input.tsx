/* <Input kind="text" placeholder="Placeholder" label="Label" name="name" /> */

import React from "react";

type InputProps = {
    kind: "text" | "email" | "password";
    label: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ kind, label, id, ...attrs }) => {
    const defaultId = React.useId() || id;

    return (
        <>
            <label htmlFor={defaultId}> {label}</label>
            <input type={kind} id={defaultId} {...attrs} />
        </>
    )
};