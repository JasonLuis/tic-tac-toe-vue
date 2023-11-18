import UiModalEndGame from './ModalEndGame.vue';

export default {
  title: 'Ui/ModalEndGame',
  component: UiModalEndGame,
  argTypes: {
    modal: {
      control: { type: 'boolean' }
    }
  }
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { UiModalEndGame },
  setup() {
    return { args };
  },
  data() {
    return {};
  },
  template: '<ui-modal-end-game v-bind="args">'
});

export const Default = Template.bind({});

Default.args = {
  modal: true
};
Default.parameters = {};
