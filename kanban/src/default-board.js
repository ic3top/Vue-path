import { uuid } from './utils';

export default {
  name: 'workshop',
  columns: [
    {
      name: 'TODO',
      tasks: [
        {
          description: 'Some description about this task...',
          name: 'first task',
          id: 1,
          userAssigned: null,
        },
        {
          description: 'Some description about this task...',
          name: 'second task',
          id: uuid(),
          userAssigned: null,
        },
        {
          description: 'some description for your easy task',
          name: 'and third',
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: '',
          name: 'First task',
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
    {
      name: 'DONE',
      tasks: [
        {
          description: '',
          name: 'First task',
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
  ],
};
