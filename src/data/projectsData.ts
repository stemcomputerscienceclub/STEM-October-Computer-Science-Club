// Define TypeScript interfaces for projects and related types
export interface Member {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  image?: string;
}

export interface GalleryItem {
  type: string;
  url: string;
  caption: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  date: string;
  author: string;
  authorImage: string;
  likes: number;
  views: number;
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
  difficulty: string;
  completionTime: string;
  tags: string[];
  longDescription?: string;
  members?: Member[];
  gallery?: GalleryItem[];
  testimonials?: Testimonial[];
  learningOutcomes?: string[];
  challenges?: string[];
  futurePlans?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'EcoTracker - Sustainability Platform',
    description: 'A comprehensive web platform for tracking environmental impact and promoting sustainable practices in communities.',
    image: '/imgs/Projects/eco-tracker.jpg',
    category: 'website',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    date: '2024-12-15',
    author: 'Ahmed Hassan',
    authorImage: '/imgs/members/Ahmed Adel.jpg',
    likes: 45,
    views: 320,
    githubUrl: 'https://github.com/stemcs/eco-tracker',
    liveUrl: 'https://eco-tracker-demo.netlify.app',
    featured: true,
    difficulty: 'Advanced',
    completionTime: '3 months',
    tags: ['Environment', 'Social Impact', 'Full Stack'],
    longDescription: 'EcoTracker is a comprehensive sustainability platform designed to help communities track and reduce their environmental impact. The platform offers tools for carbon footprint calculation, waste reduction planning, and community engagement features. Users can set sustainability goals, track progress, and connect with like-minded individuals in their area.',
    members: [
      { id: 'ah1', name: 'Ahmed Hassan', role: 'Lead Developer', image: '/imgs/members/Ahmed Adel.jpg' },
      { id: 'mo1', name: 'Mariam Omar', role: 'UI/UX Designer', image: '/imgs/members/Omar-Negm.jpeg' },
      { id: 'ym1', name: 'Youssef Mohamed', role: 'Backend Developer', image: '/imgs/members/Moi.jpg' }
    ],
    gallery: [
      { type: 'image', url: '/imgs/Projects/eco-tracker-dashboard.jpg', caption: 'Dashboard showing carbon emission tracking' },
      { type: 'image', url: '/imgs/Projects/eco-tracker-mobile.jpg', caption: 'Mobile view of the sustainability checklist' }
    ],
    testimonials: [
      {
        text: "Building EcoTracker taught me so much about full-stack development and how technology can help address environmental challenges.",
        author: "Ahmed Hassan",
        role: "Lead Developer",
        image: '/imgs/members/Ahmed Adel.jpg'
      }
    ],
    learningOutcomes: [
      "Implementing complex data visualization components using D3.js and React",
      "Designing and building a MongoDB database schema for tracking environmental metrics",
      "Creating a responsive interface that works across all device sizes",
      "Integrating third-party APIs for environmental data"
    ],
    challenges: [
      "Optimizing the carbon footprint calculator for accuracy while keeping it user-friendly",
      "Implementing real-time data synchronization between multiple devices",
      "Ensuring data privacy while enabling community features"
    ],
    futurePlans: [
      "Add gamification elements to encourage sustainable behavior",
      "Develop an API for integration with smart home devices",
      "Create a mobile app version with offline functionality"
    ]
  },
  {
    id: 2,
    title: 'MindfulAI - Mental Health Chatbot',
    description: 'AI-powered mobile application providing mental health support and personalized wellness recommendations.',
    image: '/imgs/Projects/mindful-ai.jpg',
    category: 'mobile-app',
    technologies: ['Flutter', 'Python', 'TensorFlow', 'Firebase'],
    date: '2024-11-28',
    author: 'Sarah Mohamed',
    authorImage: '/imgs/members/Omar-Negm.jpeg',
    likes: 62,
    views: 450,
    githubUrl: 'https://github.com/stemcs/mindful-ai',
    liveUrl: 'https://play.google.com/store/apps/mindfulai',
    featured: true,
    difficulty: 'Advanced',
    completionTime: '4 months',
    tags: ['AI/ML', 'Healthcare', 'Mobile Development'],
    longDescription: 'MindfulAI is a mental health support application that uses natural language processing and machine learning to provide personalized wellness recommendations. The chatbot can detect signs of anxiety, depression, and stress in conversations, offering appropriate resources and coping strategies. The app includes mood tracking, guided meditation sessions, and connections to professional help when needed.',
    members: [
      { id: 'sm1', name: 'Sarah Mohamed', role: 'ML Engineer', image: '/imgs/members/Omar-Negm.jpeg' },
      { id: 'aa1', name: 'Ali Ahmed', role: 'Flutter Developer', image: '/imgs/members/kemo.jpg' },
      { id: 'nr1', name: 'Noor Rahman', role: 'UX Researcher', image: '/imgs/members/Moi.jpg' }
    ],
    testimonials: [
      {
        text: "Developing the NLP algorithms for MindfulAI was challenging but incredibly rewarding. Seeing how technology can support mental health has been the highlight of my academic journey.",
        author: "Sarah Mohamed",
        role: "ML Engineer",
        image: '/imgs/members/Omar-Negm.jpeg'
      }
    ],
    learningOutcomes: [
      "Building and training NLP models for mental health conversation analysis",
      "Implementing secure user data handling practices for sensitive health information",
      "Designing accessible interfaces for users with various needs",
      "Cross-platform development using Flutter"
    ]
  },
  {
    id: 3,
    title: 'CodeCollab - Real-time Code Editor',
    description: 'Collaborative coding platform with real-time editing, video chat, and project management features.',
    image: '/imgs/Projects/code-collab.jpg',
    category: 'web-app',
    technologies: ['Vue.js', 'Socket.io', 'PostgreSQL', 'Docker'],
    date: '2024-10-12',
    author: 'Omar Ali',
    authorImage: '/imgs/members/Zaki.jpg',
    likes: 38,
    views: 280,
    githubUrl: 'https://github.com/stemcs/code-collab',
    liveUrl: 'https://codecollab-demo.com',
    featured: false,
    difficulty: 'Intermediate',
    completionTime: '2 months',
    tags: ['Collaboration', 'Real-time', 'Development Tools'],
    longDescription: "CodeCollab is a real-time collaborative coding platform designed for remote teams and educational purposes. The application features a shared code editor with syntax highlighting for multiple programming languages, real-time video and text chat for seamless communication, and integrated project management tools. Multiple developers can work simultaneously on the same codebase, seeing each other's changes instantly.",
    members: [
      { id: 'oa1', name: 'Omar Ali', role: 'Lead Developer', image: '/imgs/members/Zaki.jpg' },
      { id: 'ln1', name: 'Leila Nasser', role: 'Frontend Developer', image: '/imgs/members/Omar-Negm.jpeg' }
    ],
    learningOutcomes: [
      "Implementing real-time WebSocket connections for collaborative editing",
      "Building a scalable backend with PostgreSQL and Docker",
      "Creating an intuitive UI for a complex application",
      "Handling simultaneous edits with conflict resolution algorithms"
    ]
  },
  {
    id: 4,
    title: 'SmartHome IoT Controller',
    description: 'Intelligent home automation system with machine learning-based energy optimization and remote control.',
    image: '/imgs/Projects/smart-home.jpg',
    category: 'iot',
    technologies: ['Arduino', 'Python', 'MQTT', 'React Native'],
    date: '2024-09-25',
    author: 'Nour Khaled',
    authorImage: '/imgs/members/Moi.jpg',
    likes: 54,
    views: 390,
    githubUrl: 'https://github.com/stemcs/smart-home-iot',
    liveUrl: null,
    featured: true,
    difficulty: 'Advanced',
    completionTime: '5 months',
    tags: ['IoT', 'Hardware', 'Machine Learning', 'Home Automation'],
    longDescription: 'The SmartHome IoT Controller is an integrated system for managing home automation devices with a focus on energy efficiency. The system uses machine learning algorithms to analyze usage patterns and automatically optimize energy consumption while maintaining comfort levels. The hardware components include custom-built Arduino-based controllers that communicate with a central hub, while the mobile app provides remote control and monitoring capabilities.',
    members: [
      { id: 'nk1', name: 'Nour Khaled', role: 'IoT Developer', image: '/imgs/members/Moi.jpg' },
      { id: 'ta1', name: 'Tarek Aziz', role: 'Hardware Engineer', image: '/imgs/members/Ahmed Adel.jpg' },
      { id: 'rh1', name: 'Rania Hassan', role: 'ML Engineer', image: '/imgs/members/Omar-Negm.jpeg' }
    ],
    gallery: [
      { type: 'image', url: '/imgs/Projects/smart-home-hardware.jpg', caption: 'Custom Arduino-based controller module' },
      { type: 'image', url: '/imgs/Projects/smart-home-app.jpg', caption: 'Mobile app interface for remote control' }
    ],
    testimonials: [
      {
        text: "Working on the SmartHome project allowed me to combine my interests in hardware and software engineering. Building the physical components and then connecting them to our software was an incredible learning experience.",
        author: "Nour Khaled",
        role: "IoT Developer",
        image: '/imgs/members/Moi.jpg'
      }
    ],
    challenges: [
      "Creating reliable communication between different IoT devices and the central hub",
      "Implementing ML algorithms that could run efficiently on limited hardware",
      "Ensuring security for remote access to home devices",
      "Designing a power management system for battery-operated sensors"
    ]
  },
  {
    id: 5,
    title: 'CryptoPortfolio Tracker',
    description: 'Cryptocurrency portfolio management tool with real-time price tracking and advanced analytics.',
    image: '/imgs/Projects/crypto-portfolio.jpg',
    category: 'desktop-app',
    technologies: ['Electron', 'TypeScript', 'Chart.js', 'Redis'],
    date: '2024-08-14',
    author: 'Karim Atef',
    authorImage: '/imgs/members/kemo.jpg',
    likes: 29,
    views: 210,
    githubUrl: 'https://github.com/stemcs/crypto-portfolio',
    liveUrl: null,
    featured: false,
    difficulty: 'Intermediate',
    completionTime: '6 weeks',
    tags: ['Finance', 'Analytics', 'Desktop', 'Cryptocurrency'],
    longDescription: 'CryptoPortfolio Tracker is a desktop application that enables users to manage and monitor their cryptocurrency investments. The app integrates with multiple cryptocurrency exchanges via APIs to provide real-time price data, portfolio valuation, and performance metrics. Advanced charting capabilities allow users to visualize trends and analyze their investment strategies. The application also includes features for setting price alerts and generating tax reports.',
    members: [
      { id: 'ka1', name: 'Karim Atef', role: 'Full Stack Developer', image: '/imgs/members/kemo.jpg' }
    ],
    learningOutcomes: [
      "Building cross-platform desktop applications with Electron",
      "Working with financial APIs and handling real-time data streams",
      "Implementing complex data visualization with Chart.js",
      "Managing application state in a TypeScript environment"
    ]
  },
  {
    id: 6,
    title: 'LearnPath - AI Study Assistant',
    description: 'Personalized learning platform using AI to create custom study paths and track student progress.',
    image: '/imgs/Projects/learn-path.jpg',
    category: 'website',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'Supabase'],
    date: '2024-07-30',
    author: 'Layla Ahmed',
    authorImage: '/imgs/members/Ahmed Adel.jpg',
    likes: 71,
    views: 520,
    githubUrl: 'https://github.com/stemcs/learn-path',
    liveUrl: 'https://learnpath-ai.vercel.app',
    featured: true,
    difficulty: 'Advanced',
    completionTime: '4 months',
    tags: ['Education', 'AI/ML', 'Personalization', 'Learning'],
    longDescription: 'LearnPath is an AI-powered learning platform that creates personalized study plans based on individual learning styles, goals, and current knowledge levels. The platform uses machine learning algorithms to analyze student performance and adapt study materials in real-time. Features include intelligent quizzes, progress tracking, spaced repetition flashcards, and resource recommendations. The system is designed to help students learn more efficiently by focusing on areas that need improvement.',
    members: [
      { id: 'la1', name: 'Layla Ahmed', role: 'AI Developer', image: '/imgs/members/Ahmed Adel.jpg' },
      { id: 'mk1', name: 'Malik Khalid', role: 'Frontend Developer', image: '/imgs/members/Zaki.jpg' },
      { id: 'fs1', name: 'Fatima Saleh', role: 'Education Specialist', image: '/imgs/members/Omar-Negm.jpeg' }
    ],
    testimonials: [
      {
        text: "Developing LearnPath was a perfect blend of my interests in AI and education. It's exciting to see how machine learning can create truly personalized learning experiences.",
        author: "Layla Ahmed",
        role: "AI Developer",
        image: '/imgs/members/Ahmed Adel.jpg'
      }
    ],
    challenges: [
      "Creating an AI model that could effectively analyze learning patterns",
      "Designing an algorithm to generate study plans that adapt to student progress",
      "Building a system that works across different subjects and knowledge domains",
      "Ensuring the platform remains engaging to prevent student dropout"
    ]
  },
  {
    id: 7,
    title: 'VirtualLab - Online Science Experiments',
    description: 'Virtual laboratory platform for conducting physics and chemistry experiments in an interactive 3D environment.',
    image: '/imgs/Projects/virtual-lab.jpg',
    category: 'web-app',
    technologies: ['Three.js', 'WebGL', 'PHP', 'MySQL'],
    date: '2024-06-18',
    author: 'Mohamed Zaki',
    authorImage: '/imgs/members/Zaki.jpg',
    likes: 43,
    views: 350,
    githubUrl: 'https://github.com/stemcs/virtual-lab',
    liveUrl: 'https://virtuallab-experiments.com',
    featured: false,
    difficulty: 'Advanced',
    completionTime: '3 months',
    tags: ['Education', '3D Graphics', 'Science', 'Interactive'],
    longDescription: 'VirtualLab is an interactive 3D environment that simulates physics and chemistry experiments for educational purposes. Students can conduct experiments that might be too dangerous, expensive, or impractical in a physical classroom setting. The platform includes realistic physics simulations, chemical reaction visualizations, and tools for data collection and analysis. Experiments are designed to match standard curriculum requirements while encouraging exploration and hypothesis testing.',
    members: [
      { id: 'mz1', name: 'Mohamed Zaki', role: '3D Developer', image: '/imgs/members/Zaki.jpg' },
      { id: 'ad1', name: 'Amira Darwish', role: 'Science Educator', image: '/imgs/members/Omar-Negm.jpeg' }
    ],
    gallery: [
      { type: 'image', url: '/imgs/Projects/virtual-lab-physics.jpg', caption: 'Physics experiment simulation' },
      { type: 'image', url: '/imgs/Projects/virtual-lab-chemistry.jpg', caption: 'Interactive chemistry experiment' }
    ],
    testimonials: [
      {
        text: "Building VirtualLab was my first major experience with 3D graphics programming. It was challenging to optimize the WebGL performance, but seeing students use it for experiments made it all worthwhile.",
        author: "Mohamed Zaki",
        role: "3D Developer",
        image: '/imgs/members/Zaki.jpg'
      }
    ],
    learningOutcomes: [
      "Creating interactive 3D visualizations with Three.js and WebGL",
      "Implementing physics simulations for realistic experiment behavior",
      "Optimizing performance for complex 3D scenes in web browsers",
      "Designing intuitive interfaces for educational tools"
    ]
  },
  {
    id: 8,
    title: 'TaskMaster - Team Productivity App',
    description: 'Cross-platform productivity application with advanced project management and team collaboration features.',
    image: '/imgs/Projects/task-master.jpg',
    category: 'mobile-app',
    technologies: ['React Native', 'GraphQL', 'Apollo', 'PostgreSQL'],
    date: '2024-05-22',
    author: 'Hana Youssef',
    authorImage: '/imgs/members/Omar-Negm.jpeg',
    likes: 36,
    views: 275,
    githubUrl: 'https://github.com/stemcs/task-master',
    liveUrl: 'https://taskmaster-app.com',
    featured: false,
    difficulty: 'Intermediate',
    completionTime: '10 weeks',
    tags: ['Productivity', 'Team Management', 'Cross-platform', 'GraphQL'],
    longDescription: 'TaskMaster is a comprehensive productivity application designed for team collaboration and project management. The app features task assignment and tracking, project timelines with Gantt chart visualizations, file sharing and version control, and integrated team communication channels. The application synchronizes across devices and platforms, allowing seamless transitions between desktop and mobile usage while maintaining real-time updates.',
    members: [
      { id: 'hy1', name: 'Hana Youssef', role: 'Mobile Developer', image: '/imgs/members/Omar-Negm.jpeg' },
      { id: 'am1', name: 'Adam Mahmoud', role: 'Backend Developer', image: '/imgs/members/kemo.jpg' }
    ],
    challenges: [
      "Implementing efficient data synchronization across devices",
      "Designing a consistent UI that works well on both mobile and desktop",
      "Building a responsive GraphQL API that handles complex queries efficiently",
      "Creating intuitive project visualization tools"
    ],
    futurePlans: [
      "Add AI-powered task prioritization and scheduling",
      "Implement time tracking and productivity analytics",
      "Create integrations with popular productivity tools and services"
    ]
  }
];
