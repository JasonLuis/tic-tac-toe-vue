import UiBaseButton from './BaseButton.vue';

export default {
  title: 'Ui/BaseButton',
  component: UiBaseButton,
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    background: {
      control: { type: 'color' }
    },
    color: {
      control: { type: 'color' }
    },
    boxShadow: {
      control: { type: 'color' }
    }
  }
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

Default.args = {
  label: 'New game (vs cpu)',
  background: '#F2B137',
  color: '#1f3641',
  boxShadow: '#CC8B13'
};
Default.parameters = {
  docs: {
    source: {
      code: `<ui-base-button />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
