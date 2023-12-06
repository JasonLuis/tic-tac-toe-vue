import UiGameItemBoard from './GameItemBoard.vue';

export default {
  title: 'Ui/GameItemBoard',
  component: UiGameItemBoard,
  argTypes: {
    itemSelect: {
      control: { type: 'text' }
    }
  }
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
Default.args = {
  itemSelect: 'X'
};

Default.parameters = {
  docs: {
    source: {
      code: `<ui-game-item-board itemSelect="x" />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
