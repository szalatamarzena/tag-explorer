import SortBySelect from './SortBySelect';

export default {
  title: 'SortBySelect',
  component: SortBySelect,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export const Default = {
  args: {
    placeholder: 'Select option',
    options: [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
    ],
  },
};
