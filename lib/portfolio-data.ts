type ExperienceType = 'experience' | 'education';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: ExperienceType;
}

interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export const portfolioData = {
  name: 'Leian Carl Dela Cruz',
  title: 'Associate Consultant Developer',
  company: 'Oracle',
  location: 'Pasig City, Philippines',
  email: 'leiandelacruz024@example.com',
  avatar: '/me.jpg', // Add your profile picture to public folder
  
  about: {
    title: 'About Me',
    description: 'Hi, I\'m Leian, a software developer with experience building AI-powered mobile and web applications, collaborating with stakeholders, and translating user needs into scalable solutions. Strong communicator with proven ability to present technical concepts to non-technical audiences, research customer pain points, and use AI tools to work efficiently. ',
  },

  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Fullstack Developer Intern',
        company: 'WyzLab Solutions',
        period: 'June - August 2025',
        type: 'experience',
      },
      {
        role: 'Software Developer Intern',
        company: 'Kippap Learning Corp.',
        period: 'Feb - April 2025',
        type: 'experience',
      },
    ] as ExperienceItem[],
  },

  education: {
    title: 'Education',
    items: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of the Philippines Cebu (CHED Center of Excellence in IT)',
        period: '2022 - 2026',
      },
      {
        degree: 'STEM (With Honors)',
        school: 'Pasig City Science Highschool',
        period: '2016 - 2022',
      },
    ] as EducationItem[],
  },

  technologies: {
    title: 'Tech Stacks',
    skills: [
      { name: 'C/C++', icon: '⚙️' },
      { name: 'JavaScript', icon: '⚙️' },
      { name: 'TypeScript', icon: '⚙️' },
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'Dart', icon: '🎯' },
      { name: 'Flutter', icon: '💙' },
      { name: 'React', icon: '⚛️' },
      { name: 'React Native', icon: '⚛️' },
      { name: 'Node.js', icon: '💚' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Bootstrap', icon: '🅱️' },
      { name: 'Supabase', icon: '🗄️' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🗄️' },
      { name: 'HTML', icon: '📄' },
      { name: 'CSS', icon: '🎨' },
      { name: 'Agile', icon: '🔄' },
      { name: 'Git', icon: '🔀' },
      { name: 'REST APIs', icon: '🔗' },
      { name: 'OpenAI', icon: '🤖' },
      { name: 'Copilot', icon: '🤖' },
    ],
  },

  projects: {
    title: 'Notable Projects',
    items: [
      {
        id: 1,
        name: 'UP Dormers Association',
        description: "Developed a full-stack web application that automated dormitory application scoring and email results, reducing processing time from 10 days to instant, one-click results.",
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
        links: { live: 'https://dorm.upcebu.edu.ph', github: '' },
      },
      {
        id: 2,
        name: 'ClothesMinded',
        description: 'Designed and developed a 2D virtual try-on app with avatar generation and clothing simulation, earning Top 7 Overall, Top 3 Video Pitch, and Best Logo Award at Philippine Startup Challenge 9 Region VII',
        technologies: ['React','React Native', 'Next.js', 'Appwrite','Kwai Kolors API'],
        links: { live: 'https://drive.google.com/file/d/1fgsQJV47U0NsFw36Od5ypGxjqmY8r0iy/view', github: '' },
      },
      {
        id: 3,
        name: 'Dreamify',
        description: 'an AI-powered dream journal app that converts text entries into visual interpretations, recognized as the best project in class.',
        technologies: ['React', 'React Native', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
        links: { live: 'https://drive.google.com/file/d/1LrUhYB0WXG819mBcOgoLCFEc46B3iSXA/view?usp=drive_link', github: '' },
      },
      {
        id: 4,
        name: 'Brain Rot & Compiley Studio',
        description: 'BrainRot is a programming language whose syntax is inspired by Gen-Z and Gen Alpha slang. Despite its chaotic vibes, it behaves just like C++, Brainrot is executed using the Compiley Studio IDE which is built with Python and Tkinter.',
        technologies: ['MIPS', 'Python', 'Tkinter'],
        links: { live: 'https://github.com/DaRainFlavor/CMSC-124-PL-Project', github: '' },
      },
    ],
  },

  contact: {
    title: 'Contact',
    description: 'I\'m always open to discussing new projects and opportunities.',
    links: [
      { label: 'Email', value: 'leiandelacruz024@gmail.com', icon: '✉️' },
      { label: 'GitHub', value: 'https://github.com/leidc024', icon: '🔗' },
      { label: 'LinkedIn', value: 'https://www.linkedin.com/in/leian-carl-dela-cruz-915b2324b/', icon: '💼' },
      
    ],
  },

  certifications: {
    title: 'Certifications',
    items: [
      {
        name: 'Google Cybersecurity Professional Certificate',
        issuer: 'Google',
        image: '/cert2.png', // Add your certificate images to public/certifications folder
      },
      {
        name: 'The Complete Web Development Bootcamp 2024',
        issuer: 'Udemy',
        image: '/cert1.png',
      },
     
    ],
  },

  awards: {
    title: 'Awards',
    items: [
      {
        name: 'Philippine Startup Challenge 9 Region VII',
        achievement: '7th Place Overall, Best Logo Award, Top 3 Video Pitch',
        image: '/startup.jpg', // Add your hackathon images to public/hackathons folder
        date: '2025',
      },
      {
        name: 'MCIA Ceb-i Hacks',
        achievement: 'Finalist',
        image: '/hackathon1.png',
        date: '2025',
      },
      {
        name: 'Chess Intramurals',
        achievement: 'Champion',
        image: '/chess.png',
        date: '2023',
      },
      
    ],
  },

  social: {
    github: 'https://github.com/leidc024',
    linkedin: 'https://www.linkedin.com/in/leian-carl-dela-cruz-915b2324b/',
    
  },
};
