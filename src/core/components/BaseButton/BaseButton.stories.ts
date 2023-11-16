import UiBaseButton from './BaseButton.vue';

export default {
  title: 'Ui/BaseButton',
  component: UiBaseButton,
  argTypes: {}
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiBaseButton },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-base-button v-bind="args">'
});

export const Default = Template.bind({});

Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<ui-base-button />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
