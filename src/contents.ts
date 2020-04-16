export interface Link {
  name: string;
  url: string;
}

export interface ProjectModel {
  name: string;
  startYear: number;
  endYear?: number;
  type: string;
  description: string;
  tags: string[];
  roles: string[];
  links: Link[];
  images: string[];
}

export const contents: ProjectModel[] = [
  {
    name: 'NestJs backend POC project',
    startYear: 2019,
    endYear: 2020,
    type: 'Work life',
    description: 'Company Secrets so nothing to show',
    tags: ['React', 'Node.js', 'NestJs', 'AWS', 'Mongo/Mongoose'],
    roles: ['Backend'],
    links: [{ name: 'not found', url: 'www.url.com' }],
    images: [],
  },
  {
    name: 'AngularJS app',
    startYear: 2019,
    type: 'Work life',
    description: 'Deployed to Heroku. MongoDB instance',
    tags: ['AngularJS', 'Node.js', 'Heroku', 'Mongo/Mongoose'],
    roles: ['Frontend', 'Backend'],
    links: [
      { name: 'https://puuppi-family-api.herokuapp.com', url: 'https://puuppi-family-api.herokuapp.com' },
    ],
    images: [],
  },
  {
    name: 'AngularJS app',
    startYear: 2018,
    endYear: 2020,
    type: 'Work life',
    description: 'Deployed to AWS',
    tags: ['AngularJS', 'Node.js', 'AWS'],
    roles: ['Frontend', 'Backend'],
    links: [],

    images: [],
  },
  {
    name: 'AngularJS app',
    startYear: 2018,
    type: 'Work life',
    description: 'Deployed to Heroku. MongoDB instance',
    tags: ['AngularJS', 'Node.js'],
    roles: ['Frontend'],
    links: [],

    images: [],
  },
  {
    name: 'React learning project',
    startYear: 2018,
    endYear: 2018,
    type: 'Work life',
    description: '',
    tags: ['React', 'Node.js'],
    roles: ['Frontend'],
    links: [],

    images: [],
  },
  {
    name: 'Wordpress application. PHP project',
    startYear: 2016,
    endYear: 2017,
    type: 'Free time',
    description: 'Wordpress project with custom page for music band',
    tags: ['Wordpess', 'PHP'],
    roles: ['Frontend'],
    links: [],
    images: [],
  },
  {
    name: 'Javascript, AngluarJS websocket navigation POC',
    startYear: 2018,
    endYear: 2019,
    type: 'Work life',
    description: '',
    tags: ['Javascript'],
    roles: ['Frontend'],
    links: [],
    images: [],
  },
];
