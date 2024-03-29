export const data = {
  isProficient: false,
  /**
   * values for toolsUsed. Please note that the values are stored in a string, not an array
   * 0:	Redux
   * 1:	Lodash
   * 2:	Ant design
   * 3:	Webpack
   * 4:	Other
   */
  toolsUsed: '0,2,3,4',
};

export const proficiency = [
  {
    id: 'no',
    name: 'No',
    // value: false,
  },
  {
    id: 'yes',
    name: 'Yes',
    // value: true,
  },
];

export const tools = [
  {
    id: 'redux',
    name: 'Redux',
  },
  {
    id: 'lodash',
    name: 'Lodash',
  },
  {
    id: 'ant-design',
    name: 'Ant design',
  },
  {
    id: 'webpack',
    name: 'Webpack',
  },
  {
    id: 'other',
    name: 'Other',
  },
];

export type TTool = (typeof tools)[number];
