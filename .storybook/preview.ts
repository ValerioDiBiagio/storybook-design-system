import type { Preview } from '@storybook/react-vite'

import "../src/styles/reset.css";
import "../src/styles/variables.css";
import "../src/styles/typography.css"
// Importa il decoratore 'withThemeByClassName' per gestire i temi.
import { withThemeByClassName } from "@storybook/addon-themes";

// L'oggetto 'preview' definisce la configurazione globale di Storybook.
const preview: Preview = {
  // La sezione 'parameters' configura il comportamento di Storybook.
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // 'a11y' configura il controllo di accessibilità (accessibility) di Storybook.
    a11y: {
      // 'test' definisce la modalità di reporting delle violazioni di accessibilità:
      // 'todo' - mostra le violazioni dell'accessibilità solo nell'interfaccia di test (UI).
      test: 'todo'
    },
  },
  // La sezione 'decorators' permette di avvolgere le storie con logiche o componenti aggiuntivi.
  decorators: [
    // 'withThemeByClassName' è un decoratore che aggiunge il supporto per i temi.
    withThemeByClassName({
      // 'themes' mappa i nomi dei temi a classi CSS.
      themes: {
        light: "light-theme",
        dark: "dark-theme",
      },
      defaultTheme: "light",
      parentSelector: "body",
    }),
  ],
};

export default preview; 