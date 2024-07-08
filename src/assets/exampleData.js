const data = {
  general: {
    name: 'JCampbell57',
    email: 'jcampbell57@gmail.com',
    phone: '555-555-5555',
    website: 'Github.com/JCampbell57',
    location: 'San Francisco Bay Area',
    skills: [
      'Ruby on Rails',
      'JavaScript',
      'PostgreSQL',
      'git',
      'HTML5',
      'CSS3',
      'webpack',
      'Jest',
      'responsive design',
    ],
    interests: [
      'Hiking', 
      'disc golf', 
      'video games'
    ],
  },
  education: [
    {
      key: 'edu1',
      school: 'California State University',
      location: 'Central Valley, CA',
      completionDate: 'May, 2017',
      degree: 'BS, Business Administration, Finance'
    },
  ],
  experience: [
    {
      key: 'exp1',
      employer: 'Example Workplace',
      title: 'Full-Stack Software Developer',
      startDate: 'Jan. 2024',
      endDate: 'Present',
      location: 'Remote',
      descriptions: [
        {
          key: 'exp1desc1',
          text: 'Contribute to and help maintain a large web application built with Ruby on Rails, JavaScript, and React.',
        },
      ],
    },
    {
      key: 'exp2',
      employer: 'Example Workplace',
      title: 'Math Teacher',
      startDate: 'July 2018',
      endDate: 'May 2023',
      location: 'Central Valley, CA',
      descriptions: [
        {
          key: 'exp2desc1',
          text: 'Served as grade level leader and member of the Instructional Leadership Team.',
        },
        {
          key: 'exp2desc2',
          text: 'Implemented e-learning technologies and blended learning strategies to promote student learning.',
        },
        {
          key: 'exp2desc3',
          text: 'Measured student progress and used assessment data to improve instruction.',
        },
      ],
    },
    {
      key: 'exp3',
      employer: 'Example Workplace',
      title: 'Production Manager',
      startDate: 'Nov. 2009',
      endDate: 'Jan. 2017',
      location: 'Central Valley, CA',
      descriptions: [
        {
          key: 'exp3desc1',
          text: 'Oversaw production as the company grew from servicing 15 clients to more than 120.',
        },
        {
          key: 'exp3desc2',
          text: 'Learned and integrated innovative technologies to expand product offering and increase profitability.',
        },
      ],
    },
  ],
  projects: [
    {
      key: 'proj1',
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
      descriptions: [
        {
          key: 'proj1desc1',
          text: 'A full-stack social media app built with Ruby on Rails; utilizing a PostgreSQL database; hosted through Fly.io',
        },
        {
          key: 'proj1desc2',
          text: 'Utilizes OAuth for user authentication; features connecting, posting, commenting, and liking functionality',
        },
        {
          key: 'proj1desc3',
          text: 'Features real time updates of the timeline via Actioncable; infinite scroll functionality via the Pagy gem',
        },
      ],
    },
    {
      key: 'proj2',
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
      descriptions: [
        {
          key: 'proj2desc1',
          text: 'A web app version of the classic board game “Battleship” with built in computer AI',
        },
        {
          key: 'proj2desc2',
          text: 'Features responsive UI/UX for accessibility with any screen size',
        },
        {
          key: 'proj2desc3',
          text: 'Leverages Jest to test various functionalities',
        },
      ],
    },
    {
      key: 'proj3',
      name: 'Weatherserve',
      skills: [
        'JavaScript', 
        'CSS3', 
        'webpack', 
        'git',
      ],
      githubRepo: 'https://github.com/jcampbell57/weather-app',
      livePreview: 'https://jcampbell57.github.io/weather-app/',
      descriptions: [
        {
          key: 'proj3desc1',
          text: 'A web-based weather application that leverages WeatherAPI to deliver real-time weather information',
        },
        {
          key: 'proj3desc2',
          text: 'Features 5-day forecast and dynamic icons dependant on weather conditions',
        },
      ],
    },
    {
      key: 'proj4',
      name: 'Things To Do',
      skills: [
        'JavaScript', 
        'CSS3', 
        'webpack', 
        'git',
      ],
      githubRepo: 'https://github.com/jcampbell57/odin-todo-list',
      livePreview: 'https://jcampbell57.github.io/odin-todo-list/',
      descriptions: [
        {
          key: 'proj4desc1',
          text: 'A Todo List web app featuring project categorization and localStorage utilization',
        },
        {
          key: 'proj4desc2',
          text: 'Makes use of object-oriented principles for increased maintainability and extensibility',
        },
      ],
    },
    {
      key: 'proj5',
      name: 'Chess',
      skills: [
        'Ruby', 
        'RSpec', 
        'git',
      ],
      githubRepo: 'https://github.com/jcampbell57/odin-todo-list',
      livePreview: 'https://replit.com/@jcampbell57/Chess#main.rb',
      descriptions: [
        {
          key: 'proj4desc1',
          text: 'A Chess game utilizing a command-line interface with built in computer AI',
        },
        {
          key: 'proj4desc2',
          text: 'Leverages RSpec to test various functionalities',
        },
      ],
    },
  ]
}

export default data
