import React from "react";

// Definisce l'interfaccia per il tipo di contesto delle Tab.
// Contiene 'activeTab' (l'ID della tab attiva) e 'setActiveTab' (una funzione per impostare la tab attiva).
interface TabsContextType {
    activeTab: string;
    setActiveTab: (tabId: string) => void; // Funzione per cambiare la tab attiva, accetta l'ID della nuova tab.
}

// Crea il contesto React per le Tab.
// Il valore iniziale è 'undefined', il che significa che il contesto non è ancora stato fornito.
export const TabsContext = React.createContext<TabsContextType | undefined>(
    undefined,
);

// Hook personalizzato 'useTabsContext' per accedere al contesto delle Tab.
// Questo hook semplifica l'utilizzo del contesto e aggiunge un controllo di errore.
export const useTabsContext = () => {
    const context = React.useContext(TabsContext); // Tenta di accedere al contesto.
    // Se il contesto è 'undefined', significa che l'hook è stato chiamato al di fuori di un componente Tabs,
    // quindi lancia un errore per indicare un uso improprio.
    if (context === undefined) {
        throw new Error("useTabsContext must be used within a Tabs component");
    }
    return context;
};