import { useTabsContext } from "./Tabs.Context"; // Importa l'hook per accedere al contesto delle tab

// Definisce le proprietà per il componente Tab.
interface TabProps {
    id: string;
    children: React.ReactNode;
}

// Il componente 'Tab' rappresenta il pannello di contenuto associato a un'etichetta di tab.
// Mostra o nasconde il suo contenuto in base alla tab attualmente attiva.
export const Tab: React.FC<TabProps> = ({ id, children }) => {
    const { activeTab } = useTabsContext(); // Ottiene l'ID della tab attualmente attiva dal contesto.
    return (
        <div
            aria-labelledby={`button-${id}`}
            role="tabpanel"
            key={id}
            id={id}
            hidden={activeTab !== id}
        >
            {children}
        </div>
    );
};