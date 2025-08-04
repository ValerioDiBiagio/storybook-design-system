import reset from "../styles/reset.css?raw";
import typography from "../styles/typography.css?raw";

// Il componente 'GlobalStyles' è un componente funzionale React.
// Il suo scopo è iniettare stili CSS globali nel DOM.
export const GlobalStyles = () => {
    return <style>{`${reset} ${typography}`}</style>; // Renderizza un tag <style> contenente le stringhe CSS importate.
};