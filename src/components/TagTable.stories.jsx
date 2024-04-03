import TagTable from './TagTable';

export default {
  title: 'TagTable',
  component: TagTable,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export const Default = {
  args: {
    tags: [
      { name: 'item 1', count: 10 },
      { name: 'item 2', count: 50 },
      { name: 'item 3', count: 30 },
    ],
    headers: [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
    ],
  },
};
