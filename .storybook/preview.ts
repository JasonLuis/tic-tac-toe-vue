import '../src/core/assets/styles/quasar.sass';
import { setup } from '@storybook/vue3';
import { Quasar } from 'quasar';
import { createPinia } from 'pinia';

const pinia = createPinia();


setup((app) => {
  app.use(Quasar, {});
  app.use(pinia);
});
import type { Preview } from '@storybook/vue3';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
