import UiLogoGame from './LogoGame.vue';

export default {
  title: 'Ui/LogoGame',
  component: UiLogoGame,
  argTypes: {}
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiLogoGame },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-logo-game v-bind="args">'
});

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    source: {
      code: `<ui-logo-game />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
