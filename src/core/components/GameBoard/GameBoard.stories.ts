import UiGameBoard from './GameBoard.vue';

export default {
  title: 'Ui/GameBoard',
  component: UiGameBoard,
  argTypes: {}
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiGameBoard },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-game-board v-bind="args">'
});

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {};
