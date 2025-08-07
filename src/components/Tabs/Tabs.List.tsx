import { Button } from "./Tabs.Button";

// Definisce il tipo delle props per il componente List.
// 'tabsLabels' è un array di oggetti, dove ogni oggetto ha una 'label' (il contenuto della tab)
// e un 'tabId' (un identificatore unico per la tab).
type TablistProp = {
    tabsLabels: {
        label: React.ReactNode;
        tabId: string;
    }[];
};

// Il componente 'List' renderizza la lista dei pulsanti delle tab.
// Gestisce anche la navigazione da tastiera per l'accessibilità.
export const List: React.FC<TablistProp> = ({ tabsLabels }) => {
    // Gestore dell'evento 'onKeyDownCapture' per la navigazione da tastiera tra le tab.
    const handleKeyDown = (event: React.KeyboardEvent) => {
        // Ottiene tutti i pulsanti delle tab all'interno della lista corrente.
        const buttons = Array.from(
            event.currentTarget.querySelectorAll("button[role='tab']"),
        );
        // Trova l'indice del pulsante attualmente focalizzato.
        const currentIndex = buttons.findIndex((button) => button === event.target);
        let newIndex = currentIndex; // Inizializza il nuovo indice al corrente.

        // Gestisce i diversi tasti premuti per la navigazione.
        switch (event.key) {
            case "Home":
                newIndex = 0;
                break;
            case "ArrowRight":
            case "ArrowUp":
                newIndex = (currentIndex + 1) % buttons.length;
                break;
            case "ArrowLeft":
            case "ArrowDown":
                newIndex = (currentIndex - 1 + buttons.length) % buttons.length;
                break;
            case "End":
                newIndex = buttons.length - 1;
                break;
            default:
                return;
        }
        // Ottiene il prossimo pulsante su cui focalizzare e gli imposta il focus.
        const next = buttons[newIndex] as HTMLButtonElement;
        next?.focus();
        event.preventDefault(); // Previene il comportamento predefinito del browser per i tasti di navigazione.
    };

    return (
        // Il contenitore della lista delle tab, con un gestore per gli eventi della tastiera.
        <div className="tablist" role="tablist" onKeyDownCapture={handleKeyDown}>
            {tabsLabels.map(({ label, tabId }) => (
                <Button key={tabId} tabId={tabId}>
                    {label}
                </Button>
            ))}
        </div>
    );
};