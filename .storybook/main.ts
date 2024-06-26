import type { StorybookConfig } from '@storybook/vue3-vite';
import { mergeConfig } from 'vite';
import { quasar } from '@quasar/vite-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config, { }) {
    return mergeConfig(config, {
      plugins: [
        quasar({
          sassVariables: '../src/core/assets/styles/quasar.variables.sass'
        }),
      ]
    });
  }
};
export default config;

