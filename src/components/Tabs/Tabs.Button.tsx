import React from "react";
import { useTabsContext } from "./Tabs.Context"; // Importa l'hook per accedere al contesto delle tab

// Definisce le proprietà per il componente Button (che rappresenta la singola etichetta della tab).
type ButtonProps = {
    children: React.ReactNode; // 'children' è il contenuto visibile del pulsante (es. "Tab 1").
    tabId: string; // 'tabId' è l'ID univoco associato a questa specifica tab.
};

// Il componente 'Button' è il pulsante cliccabile che seleziona una tab.
// Gestisce lo stato attivo e la focalizzazione per l'accessibilità.
export const Button: React.FC<ButtonProps> = ({ children, tabId }) => {
    // Ottiene lo stato della tab attiva e la funzione per cambiarla dal contesto.
    const { activeTab, setActiveTab } = useTabsContext();

    // Gestisce lo stato di 'focusable' per l'attributo tabIndex, determinando se il pulsante è navigabile tramite tastiera.
    // Inizialmente, è focalizzabile se è la tab attiva.
    const [focusable, setFocusable] = React.useState(activeTab === tabId);

    return (
        <button
            role="tab"
            type="button"
            key={tabId}
            onClick={() => setActiveTab(tabId)}
            aria-controls={tabId}
            aria-selected={activeTab === tabId}
            id={`button-${tabId}`}
            tabIndex={focusable ? 0 : -1}

            onFocus={() => setFocusable(true)}
            onBlur={() => setFocusable(activeTab === tabId)}

        >
            {children}
        </button>
    );
};