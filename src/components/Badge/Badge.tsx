// Importa il tipo 'React' dalla libreria React.
import type React from "react";
import root from "react-shadow";
import css from "./Badge.css?raw";

// Definire un tipo TypeScript chiamato `BadgeProps`.
type BadgeProps = {
    children: React.ReactNode;
    variant?: "neutral" | "positive" | "negative";
} & React.HTMLAttributes<HTMLDivElement>;

// Definisce un componente funzionale React chiamato 'Badge'.
export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = "neutral",
    ...attrs

}) => {
    return (
        <root.div>
            <style>{css}</style>
            <div className={`badge ${variant}`} {...attrs}>
                {children}
            </div>
        </root.div>
    )
}