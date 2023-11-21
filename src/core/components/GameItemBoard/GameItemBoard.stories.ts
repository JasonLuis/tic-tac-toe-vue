import UiGameItemBoard from './GameItemBoard.vue';

export default {
  title: 'Ui/GameItemBoard',
  component: UiGameItemBoard,
  argTypes: {}
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiGameItemBoard },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-game-item-board v-bind="args">'
});

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {};
