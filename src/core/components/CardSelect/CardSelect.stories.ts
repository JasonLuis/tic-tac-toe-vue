import UiCardSelect from './CardSelect.vue';

export default {
  title: 'Ui/CardSelect',
  component: UiCardSelect,
  argTypes: {}
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiCardSelect },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-card-select v-bind="args">'
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<ui-card-select />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
