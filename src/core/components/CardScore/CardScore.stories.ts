import UiCardScore from './CardScore.vue';

export default {
  title: 'Ui/CardScore',
  component: UiCardScore,
  argTypes: {
    player: {
      options: ['player1', 'player2', 'ties'],
      control: { type: 'radio' }
    },
    score: {
      control: { type: 'number' }
    },
    text: {
      control: { type: 'text' }
    }
  }
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiCardScore },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-card-score v-bind="args">'
});

export const Default = Template.bind({});
Default.args = {
  player: 'player1',
  text: 'x (You)',
  score: 125
};
Default.parameters = {
  docs: {
    source: {
      code: `<ui-card-score />`,
      language: 'vue',
      type: 'auto'
    }
  }
};
