import UiGameBoard from './GameBoard.vue';

export default {
  title: 'Ui/GameBoard',
  component: UiGameBoard,
  argTypes: {
    currentPlayer: {
      control: { type: 'text' }
    }
  }
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

export const Default: any = Template.bind({});
Default.args = {
  currentPlayer: 'X'
};

Default.parameters = {
  docs: {
    source: {
      code: `<ui-game-board currentPlayer="x" />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
