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
    name: 'React application used as messaging suite & admin tools ',
    startYear: 2020,
    type: 'Work life',
    description: 'Massive overhaul to old UI and production ready versatile production',
    tags: ['React', 'Node.js', 'Python', 'RestAPI'],
    roles: ['Frontend', 'Backend'],
    links: [{ name: 'Quriiri', url: 'https://quriiri.fi/' }],
    images: [],
  },
  {
    name: 'NestJs backend POC project',
    startYear: 2019,
    endYear: 2020,
    type: 'Work life',
    description: 'Company Secrets so nothing to show',
    tags: ['React', 'Node.js', 'NestJs', 'AWS', 'Mongo', 'TypeScript', 'Docker'],
    roles: ['Backend'],
    links: [{ name: 'not found', url: 'www.url.com' }],
    images: [],
  },
  {
    name: 'React admin tools',
    startYear: 2019,
    endYear: 2020,
    type: 'Work life',
    description: 'Admin tools to handle configurations and admin related stuff',
    tags: ['React', 'Node.js', 'NestJs', 'TypeORM', 'PostgreSQL', 'TypeScript', 'Docker'],
    roles: ['Frontend', 'Backend'],
    links: [{ name: 'not found', url: 'www.url.com' }],
    images: [],
  },
  {
    name: 'AngularJS personal app for family usage',
    startYear: 2020,
    type: 'Work life',
    description: 'Deployed to Heroku. mLab MongoDB instance',
    tags: ['AngularJS', 'Node.js', 'Heroku', 'Mongo'],
    roles: ['Frontend', 'Backend'],
    links: [
      { name: 'https://puuppi-family-api.herokuapp.com', url: 'https://puuppi-family-api.herokuapp.com' },
    ],
    images: [],
  },
  {
    name: 'AngularJS multiple apps used as cloud services',
    startYear: 2018,
    endYear: 2019,
    type: 'Work life',
    description: 'Deployed to AWS, used in car infotainment for user management and cloud services',
    tags: ['AngularJS', 'Node.js', 'AWS', 'Docker'],
    roles: ['Frontend', 'Backend'],
    links: [],
    images: [],
  },
  {
    name: 'Code-tracker dashboard and backend services',
    startYear: 2020,
    type: 'Work life',
    description: '.net, ef core project to help track coding',
    tags: ['.NET', 'EF', 'C#', 'React'],
    roles: ['Frontend', 'Backend'],
    links: [],
    images: [],
  },
  {
    name: 'React + Redux learning project',
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
    startYear: 2017,
    endYear: 2018,
    type: 'Work life',
    description: '',
    tags: ['Javascript'],
    roles: ['Frontend'],
    links: [],
    images: [],
  },
  {
    name: 'React+redux storefront and e-commercial platform',
    startYear: 2020,
    type: 'Free time',
    description: 'Basic and template for e-commercial platform',
    tags: ['React', 'Redux', 'Typescript'],
    roles: ['Frontend', 'Backend'],
    links: [{ name: 'not found', url: 'www.url.com' }],
    images: [],
  },
];
