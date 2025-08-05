import type { ReactElement } from "react";
import React from "react";
import { Item, type ItemProps } from "./Tabs.item";
import { List } from "./Tabs.List";
import { TabsContext } from "./Tabs.Context";
import { Tab } from "./Tabs.Tab";
import root from "react-shadow";
import css from "./Tabs.css?raw";
import { GlobalStyles } from "../GlobalStyles";

// Funzione di guardia del tipo per verificare se un figlio è un elemento valido di Tab.Item
const isTabValidChildren = (
    child: React.ReactNode,
): child is ReactElement<typeof Item> => {
    return React.isValidElement(child) && child.type === Item;
};

// Definisce le prop per il componente Tabs
type TabsProps = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

// Componente principale Tabs
export const Tabs: React.FC<TabsProps> & { Item: typeof Item } = ({
    children,
}) => {
    const id = React.useId(); // Genera un ID unico per le tab
    const [activeTab, setActiveTab] = React.useState(id + 0); // Gestisce la tab attiva

    // Filtra e mappa i figli validi (solo Tabs.Item) aggiungendo un ID
    const validChildren = React.Children.toArray(children)
        .filter(isTabValidChildren)
        .map((child, i) => ({ ...child, id: id + i }));

    // Estrae le etichette e gli ID delle tab dai figli validi
    const tabsLabels = validChildren.map((child) => ({
        label: (child.props as unknown as ItemProps).label,
        tabId: child.id,
    }));

    // Avvisa se ci sono figli non validi passati al componente Tabs
    if (validChildren.length !== React.Children.count(children)) {
        console.warn("Invalid children for Tabs");
    }

    return (
        <root.div data-testid="tabs-root">
            <GlobalStyles />
            <style>{css}</style>
            <TabsContext.Provider value={{ activeTab, setActiveTab }}>
                <List tabsLabels={tabsLabels} />
                {validChildren.map(({ id, ...child }) => {
                    return (
                        <Tab id={id} key={id}>
                            {child}
                        </Tab>
                    );
                })}
                {React.Children.map(children, (child) => {
                    if (!isTabValidChildren(child)) {
                        return child;
                    }
                    return null;
                })}
            </TabsContext.Provider>
        </root.div>
    );
};

// Collega il componente Item come proprietà di Tabs
Tabs.Item = Item; 