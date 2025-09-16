import {
  backend,
  coverhunt,
  css,
  dcc,
  docker,
  frontend,
  git,
  graphql,
  html,
  javascript,
  kelhel,
  komikult,
  leaderboard,
  math,
  microverse,
  movie,
  nodejs,
  nyeusi,
  postgresql,
  reactjs,
  redux,
  rubyrails,
  tailwind,
  typescript, 
  figma
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Manual Testing Expert',
    icon: frontend,
  },
  {
    title: 'Test Automation Engineer',
    icon: backend,
  },
  {
    title: 'API Testing Specialist',
    icon: frontend,
  },
  {
    title: 'Quality Assurance Lead',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'Playwright',
    icon: javascript,
  },
  {
    name: 'Postman',
    icon: nodejs,
  },
  {
    name: 'TestRail',
    icon: figma,
  },
  {
    name: 'JIRA',
    icon: redux,
  },
  {
    name: 'Swagger',
    icon: graphql,
  },
  {
    name: 'SQL',
    icon: postgresql,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Gatling',
    icon: docker,
  },
  {
    name: 'API Testing',
    icon: nodejs,
  },
  {
    name: 'Manual Testing',
    icon: html,
  },
  {
    name: 'Automation Testing',
    icon: javascript,
  },
  {
    name: 'Load Testing',
    icon: docker,
  },
  {
    name: 'Regression Testing',
    icon: reactjs,
  },
  {
    name: 'Agile Methodologies',
    icon: tailwind,
  },
];

const experiences = [
  {
    title: 'Software Requirement Analyst Intern',
    company_name: 'Zapta Technologies',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2022',
    points: [
      'Learned requirement gathering from clients',
      'Created workflow diagrams and process documentation for various software projects',
      'Authored comprehensive technical documentation including SRS, BRD documents and Flow Diagrams'
    ],
  },
  {
    title: 'Software Quality Assurance Engineer',
    company_name: 'Ultra Codes Pvt. Limited',
    icon: microverse,
    iconBg: '#333333',
    date: '2022 - Current',
    points: [
      'Performed end-to-end Manual and API testing (using Postman & Swagger) for 5+ web and mobile applications including SaaS platform Techbazaar',
      'Developed Automated regression test suites using Playwright, covering 40% of stable features and reducing test execution time',
      'Collaborated cross-functionally with Dev, Product, and Design teams to establish test plans and acceptance criteria',
      'Developed and maintained 200+ test cases in TestRail and detailed bug reports in JIRA, enhancing team transparency',
      'Designed complete testing strategies covering UI, functionality, and edge cases, improving sprint delivery efficiency',
      'Created comprehensive test documentation including plans, cases, and reports for SaaS products like Techbazaar, TrailerCentral'
    ],
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Techbazaar SaaS Platform Testing',
    description: 'End-to-end manual and API testing for a comprehensive SaaS platform, ensuring high-quality releases with minimal defects through systematic test execution and bug tracking.',
    tags: [
      {
        name: 'manual-testing',
      },
      {
        name: 'api-testing',
      },
      {
        name: 'postman',
      },
      {
        name: 'swagger',
      },
    ],
  },
  {
    id: 'project-2',
    name: 'TrailerCentral Quality Assurance',
    description: 'Comprehensive QA framework development including test documentation, automated regression suites, and cross-functional collaboration for improved delivery efficiency.',
    tags: [
      {
        name: 'test-automation',
      },
      {
        name: 'playwright',
      },
      {
        name: 'test-documentation',
      },
      {
        name: 'regression-testing',
      },
    ],
  },
  {
    id: 'project-3',
    name: 'Automated Test Suite Development',
    description: 'Developed automated regression test suites using Playwright, covering 40% of stable features and significantly reducing test execution time.',
    tags: [
      {
        name: 'playwright',
      },
      {
        name: 'automation',
      },
      {
        name: 'regression-testing',
      },
      {
        name: 'ci-cd',
      },
    ],
  },
  {
    id: 'project-4',
    name: 'Test Case Management System',
    description: 'Developed and maintained 200+ test cases in TestRail with detailed bug reports in JIRA, enhancing team transparency and tracking.',
    tags: [
      {
        name: 'testrail',
      },
      {
        name: 'jira',
      },
      {
        name: 'test-management',
      },
      {
        name: 'bug-tracking',
      },
    ],
  },
  {
    id: 'project-5',
    name: 'Cross-Platform Testing Strategy',
    description: 'Designed complete testing strategies covering UI, functionality, and edge cases for 5+ web and mobile applications, improving sprint delivery efficiency.',
    tags: [
      {
        name: 'test-strategy',
      },
      {
        name: 'ui-testing',
      },
      {
        name: 'mobile-testing',
      },
      {
        name: 'agile',
      },
    ],
  },
];

export { experiences, projects, services, technologies };

