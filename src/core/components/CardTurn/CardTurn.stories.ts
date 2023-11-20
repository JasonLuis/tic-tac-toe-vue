import UiCardTurn from './CardTurn.vue';

export default {
  title: 'Ui/CardTurn',
  component: UiCardTurn,
  argTypes: {
    turn: {
      options: ['O', 'X'],
      control: { type: 'radio' }
    }
  }
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiCardTurn },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-card-turn v-bind="args">'
});

export const Default = Template.bind({});
Default.args = {
  turn: 'X'
};

Default.parameters = {
  docs: {
    source: {
      code: `<ui-card-turn />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
