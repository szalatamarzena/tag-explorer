import { fn } from '@storybook/test';
import TagPagination from './TagPagination';

export default {
  title: 'TagPagination',
  component: TagPagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export const Default = {
  args: {
    pageCount: 10,
    onPageChange: fn(),
  },
};
