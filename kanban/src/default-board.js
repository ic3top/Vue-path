import { uuid } from './utils';

export default {
  name: 'workshop',
  columns: [
    {
      name: 'TODO',
      tasks: [
        {
          description: 'Some description about this task...',
          name: 'My first task',
          id: uuid(),
          userAssigned: null,
        },
        {
          description: 'Some description about this task...',
          name: 'second task',
          id: uuid(),
          userAssigned: null,
        },
        {
          description: '',
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
          name: 'This one is in progress',
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
          name: 'To create a `DONE` column',
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
  ],
};
