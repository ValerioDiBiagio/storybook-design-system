// Importa il tipo 'React' dalla libreria React.
import type React from "react";
import "./Badge.css";


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
    return <div className={`badge ${variant}`} {...attrs}>
        {children}
    </div>

}