import { render, within, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Tabs } from "../Tabs";

// Funzione helper per ottenere il 'shadow root' del componente.
// Questo è necessario perché il componente 'Tabs' crea un 'shadow DOM',
// che isola il suo contenuto dal DOM principale.
const getShadowRoot = (): HTMLElement | null => {
    // Seleziona l'host del 'shadow DOM' usando un attributo 'data-testid'.
    const shadowHost = document.querySelector('div[data-testid="tabs-root"]');
    // Restituisce il 'shadowRoot' se esiste, altrimenti 'null'.
    // Il tipo 'unknown as HTMLElement' è un'asserzione di tipo per TypeScript.
    return shadowHost ? (shadowHost.shadowRoot as unknown as HTMLElement) : null;
};

// Descrive il blocco di test per il componente 'Tabs'.
describe('Tabs Component', () => {

    // Funzione helper per il rendering del componente 'Tabs' con i suoi 'Tabs.Item'.
    const renderTabs = () => (
        <Tabs>
            <Tabs.Item label="Tab 1">Content 1</Tabs.Item>
            <Tabs.Item label="Tab 2">Content 2</Tabs.Item>
            <Tabs.Item label="Tab 3">Content 3</Tabs.Item>
        </Tabs>
    );

    // Variabile per memorizzare il 'shadowRoot' del componente.
    let shadowRoot: HTMLElement | null = null;

    // Blocco che viene eseguito prima di ogni test.
    beforeEach(() => {
        // Esegue il rendering del componente 'Tabs'.
        render(renderTabs());
        // Ottiene il 'shadowRoot' e lo assegna alla variabile.
        shadowRoot = getShadowRoot();
        // Assicura che il 'shadowRoot' sia stato trovato prima di procedere.
        expect(shadowRoot).not.toBeNull();
    });

    // Blocco che viene eseguito dopo ogni test.
    afterEach(() => {
        // Resetta la variabile 'shadowRoot' a 'null' per evitare side-effects.
        shadowRoot = null;
    });

    // Test 1: Verifica che tutte le etichette delle tab siano renderizzate.
    it("renders all tab labels", () => {
        // 'if (!shadowRoot) return' per il controllo del tipo in TypeScript.
        if (!shadowRoot) return;
        // Usa 'within' per cercare elementi solo all'interno del 'shadowRoot'.
        const { getByText } = within(shadowRoot);
        // Verifica che ogni etichetta di tab sia presente nel DOM.
        expect(getByText("Tab 1")).toBeInTheDocument();
        expect(getByText("Tab 2")).toBeInTheDocument();
        expect(getByText("Tab 3")).toBeInTheDocument();
    });

    // Test 2: Verifica che il contenuto della prima tab sia visibile di default.
    it("displays the first tab content by default and hides the others", () => {
        if (!shadowRoot) return;
        const { getByText } = within(shadowRoot);

        // Ottiene gli elementi di contenuto.
        const content1 = getByText("Content 1");
        const content2 = getByText("Content 2");
        const content3 = getByText("Content 3");

        // Verifica che il contenuto 1 sia presente e visibile.
        expect(content1).toBeInTheDocument();
        expect(content1).toBeVisible();
        // Verifica che il contenuto 2 e 3 siano presenti ma non visibili.
        expect(content2).toBeInTheDocument();
        expect(content2).not.toBeVisible();
        expect(content3).toBeInTheDocument();
        expect(content3).not.toBeVisible();
    });

    // Test 3: Verifica che il contenuto cambi correttamente al click di una tab.
    it("switches content when clicking on a different tab", async () => {
        if (!shadowRoot) return;
        const { getByText } = within(shadowRoot);

        // Ottiene gli elementi contenitori dei contenuti (presumibilmente l'elemento con l'attributo 'hidden').
        const content1 = getByText("Content 1").parentElement;
        const content2 = getByText("Content 2").parentElement;
        const content3 = getByText("Content 3").parentElement;

        // Simula un click sulla "Tab 2".
        const tab2 = getByText("Tab 2");
        fireEvent.click(tab2);

        // Verifica che solo il contenuto della tab 2 sia visibile (non abbia l'attributo 'hidden').
        expect(content1).toHaveAttribute("hidden");
        expect(content2).not.toHaveAttribute("hidden");
        expect(content3).toHaveAttribute("hidden");

        // Simula un click sulla "Tab 3".
        const tab3 = getByText("Tab 3");
        fireEvent.click(tab3);

        // Verifica che solo il contenuto della tab 3 sia visibile.
        expect(content1).toHaveAttribute("hidden");
        expect(content2).toHaveAttribute("hidden");
        expect(content3).not.toHaveAttribute("hidden");
    });

    // Test 4: Verifica che l'attributo 'aria-selected' sia applicato correttamente.
    it("applies aria-selected attribute to the selected tab", () => {
        if (!shadowRoot) return;
        // Ottiene tutti gli elementi con il ruolo di 'tab'.
        const { getAllByRole } = within(shadowRoot);
        const tabs = getAllByRole("tab");

        // Verifica lo stato iniziale: la prima tab deve essere selezionata.
        expect(tabs[0]).toHaveAttribute("aria-selected", "true");
        expect(tabs[1]).toHaveAttribute("aria-selected", "false");
        expect(tabs[2]).toHaveAttribute("aria-selected", "false");

        // Simula un click sulla seconda tab.
        fireEvent.click(tabs[1]);

        // Verifica che la seconda tab sia ora selezionata e le altre no.
        expect(tabs[0]).toHaveAttribute("aria-selected", "false");
        expect(tabs[1]).toHaveAttribute("aria-selected", "true");
        expect(tabs[2]).toHaveAttribute("aria-selected", "false");
    });
});