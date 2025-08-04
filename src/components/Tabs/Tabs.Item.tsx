export interface ItemProps {
    label: React.ReactNode; // La prop 'label' rappresenta l'etichetta della singola tab. Può essere qualsiasi nodo React (stringa, JSX, ecc.).
    children: React.ReactNode; // La prop 'children' rappresenta il contenuto che verrà visualizzato quando questa tab è attiva. Può essere qualsiasi nodo React.
}

// Il componente 'Item' è un semplice wrapper per il contenuto di una tab.
// Riceve le 'children' (il contenuto) e le renderizza all'interno di un div.
// Questo componente viene utilizzato all'interno del componente 'Tabs' per definire ogni singola tab.
export const Item: React.FC<ItemProps> = ({ children }) => {
    return <div>{children}</div>;
};