import type { Meta, StoryObj } from '@storybook/vue3';
import UiModalEndGame from './ModalEndGame.vue';

enum Winner {
  x = 'X',
  o = 'O'
}

const meta: Meta<typeof UiModalEndGame> = {
  title: 'Ui/ModalEndGame',
  component: UiModalEndGame,
  argTypes: {
    modal: {
      control: { type: 'boolean' }
    },
    textWin: {
      control: { type: 'text' }
    },
    winner: {
      options: ['O', 'X', ''],
      control: { type: 'radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof UiModalEndGame>;

export const Template: Story = {
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiModalEndGame },
    setup() {
      return { args };
    },
    data() {
      return {};
    },
    template: '<ui-modal-end-game v-bind="args">'
  }),
  args: {
    modal: true,
    textWin: 'PLAYER 1 WINS!',
    winner: 'O' as Winner
  },
  parameters: {
    docs: {
      source: {
        code: `<ui-modal-end-game :modal="modal" :textWin="textWind" :winner="winner"/>`,
        language: 'vue',
        type: 'auto'
      }
    }
  }
};
