import { v4 as uuidv4 } from 'uuid';

const data = {
  general: {
    name: 'JCampbell57',
    email: 'jcampbell57@gmail.com',
    phone: '444-444-4444',
    website: 'Github.com/JCampbell57',
    location: 'San Francisco Bay Area',
    certifications: [],
    skills: [
      'Ruby on Rails',
      'JavaScript',
      'React',
      'PostgreSQL',
      'git',
      'HTML5',
      'CSS3',
      'webpack',
      'Jest',
      'responsive design',
      'Test-Driven Development',
      'RESTful APIs',
      'Agile Methodologies'
    ],
    interests: [],
  },
  education: [
    {
      key: uuidv4(),
      collapsed: false,
      hidden: false,
      school: 'California State University',
      location: 'Central Valley, CA',
      completionDate: 'May, 2017',
      degree: 'BS, Business Administration, Finance',
      details: []
    },
  ],
  experience: [
    {
      key: uuidv4(),
      collapsed: true,
      hidden: false,
      employer: 'Example Workplace A',
      title: 'Full-Stack Software Developer',
      startDate: 'Jan. 2024',
      endDate: 'Present',
      location: 'Remote',
      details: [
        {
          key: uuidv4(),
          text: 'Contribute to and help maintain a large web application built with Ruby on Rails, JavaScript, and React',
        },
        {
          key: uuidv4(),
          text: 'Implement new features and optimize existing codebase for improved performance',
        },
        {
          key: uuidv4(),
          text: 'Collaborate with cross-functional teams to deliver high-quality software solutions',
        },
      ],
    },
    {
      key: uuidv4(),
      collapsed: true,
      hidden: false,
      employer: 'Example Workplace B',
      title: 'Math Teacher',
      startDate: 'July 2018',
      endDate: 'May 2023',
      location: 'Central Valley, CA',
      details: [
        {
          key: uuidv4(),
          text: 'Served as grade level leader and member of the Instructional Leadership Team',
        },
        {
          key: uuidv4(),
          text: 'Integrated e-learning technologies and blended learning strategies to enhance student engagement',
        },
        {
          key: uuidv4(),
          text: 'Utilized data-driven approaches to measure student progress and improve instructional methods',
        },
      ],
    },
  ],
  projects: [
    {
      key: uuidv4(),
      collapsed: true,
      hidden: false,
      name: 'odinbook',
      skills: [
        'Ruby on Rails',
        'PostgreSQL',
        'HTML5',
        'Bootstrap',
        'webpack',
        'git',
      ],
      githubRepo: 'https://github.com/jcampbell57/odin-book-v2',
      livePreview: 'https://odin-book-v2.fly.dev/',
      details: [
        {
          key: uuidv4(),
          text: 'Developed a full-stack social media application with user authentication, real-time updates, and infinite scroll',
        },
        {
          key: uuidv4(),
          text: 'Implemented core social networking features: user connections, posts, comments, and likes',
        },
        {
          key: uuidv4(),
          text: 'Leveraged ActionCable for real-time functionality and Pagy gem for efficient pagination',
        },
      ],
    },
    {
      key: uuidv4(),
      collapsed: true,
      hidden: false,
      name: 'Naval Warfare',
      skills: [
        'JavaScript', 
        'Jest', 
        'CSS3', 
        'webpack', 
        'git',
      ],
      githubRepo: 'https://github.com/jcampbell57/naval-warfare',
      livePreview: 'https://jcampbell57.github.io/naval-warfare/',
      details: [
        {
          key: uuidv4(),
          text: 'Built a web-based version of "Battleship" with an intelligent computer opponent',
        },
        {
          key: uuidv4(),
          text: 'Developed responsive UI/UX for cross-device compatibility',
        },
        {
          key: uuidv4(),
          text: 'Implemented comprehensive unit testing using Jest',
        },
      ],
    },
    {
      key: uuidv4(),
      collapsed: true,
      hidden: false,
      name: 'Weatherserve',
      skills: [
        'JavaScript', 
        'CSS3', 
        'webpack', 
        'git',
      ],
      githubRepo: 'https://github.com/jcampbell57/weather-app',
      livePreview: 'https://jcampbell57.github.io/weather-app/',
      details: [
        {
          key: uuidv4(),
          text: 'Created a weather application integrating WeatherAPI for real-time data',
        },
        {
          key: uuidv4(),
          text: 'Designed an intuitive interface displaying current conditions and 5-day forecasts',
        },
        {
          key: uuidv4(),
          text: 'Implemented dynamic weather icons to enhance user experience',
        },
      ],
    },
    {
      key: uuidv4(),
      collapsed: true,
      hidden: false,
      name: 'Things To Do',
      skills: [
        'JavaScript', 
        'CSS3', 
        'webpack', 
        'git',
      ],
      githubRepo: 'https://github.com/jcampbell57/odin-todo-list',
      livePreview: 'https://jcampbell57.github.io/odin-todo-list/',
      details: [
        {
          key: uuidv4(),
          text: 'Developed a task management application with project categorization and local storage',
        },
        {
          key: uuidv4(),
          text: 'Applied object-oriented programming principles for improved code organization and scalability',
        },
      ],
    },
    {
      key: uuidv4(),
      collapsed: true,
      hidden: false,
      name: 'Chess',
      skills: [
        'Ruby', 
        'RSpec', 
        'git',
      ],
      githubRepo: 'https://github.com/jcampbell57/ruby_chess',
      livePreview: 'https://replit.com/@jcampbell57/Chess#main.rb',
      details: [
        {
          key: uuidv4(),
          text: 'Built a command-line chess game played with a computer opponen',
        },
        {
          key: uuidv4(),
          text: 'Utilized test-driven development practices with RSpec',
        },
      ],
    },
  ]
}

export default data
