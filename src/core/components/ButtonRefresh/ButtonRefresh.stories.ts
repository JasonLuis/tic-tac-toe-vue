import UiButtonRefresh from './ButtonRefresh.vue';

export default {
  title: 'Ui/ButtonRefresh',
  component: UiButtonRefresh,
  argTypes: {}
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiButtonRefresh },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-button-refresh v-bind="args">'
});

export const Default = Template.bind({});

Default.args = {};
Default.parameters = {};
