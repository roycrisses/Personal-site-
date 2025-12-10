import { Project, Skill, ProcessStep } from './types';
import profilePic from './assets/profile.jpg';

export const PROFILE_PIC = profilePic;
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon Horizon",
    category: "Design",
    image: "https://picsum.photos/800/600?random=1",
    year: "2024"
  },
  {
    id: 2,
    title: "Apex Finance",
    category: "Development",
    image: "https://picsum.photos/800/600?random=2",
    year: "2023"
  },
  {
    id: 3,
    title: "Zenith Architecture",
    category: "3D",
    image: "https://picsum.photos/800/600?random=3",
    year: "2024"
  },
  {
    id: 4,
    title: "Echo Brand",
    category: "Design",
    image: "https://picsum.photos/800/600?random=4",
    year: "2023"
  },
  {
    id: 5,
    title: "Flow AI Interface",
    category: "Development",
    image: "https://picsum.photos/800/600?random=5",
    year: "2024"
  },
  {
    id: 6,
    title: "Cyberpunk City",
    category: "3D",
    image: "https://picsum.photos/800/600?random=6",
    year: "2022"
  }
];

export const SKILLS: Skill[] = [
  {
    id: 1,
    name: "Web Design",
    description: "Crafting visually stunning and user-centric layouts.",
    icon: "Layout"
  },
  {
    id: 2,
    name: "UI/UX",
    description: "Designing intuitive flows and delightful interactions.",
    icon: "MousePointer2"
  },
  {
    id: 3,
    name: "Branding",
    description: "Building memorable identities that stand out.",
    icon: "Target"
  },
  {
    id: 4,
    name: "3D / Motion",
    description: "Adding depth and life through cinema 4D and Blender.",
    icon: "Box"
  },
  {
    id: 5,
    name: "Frontend Dev",
    description: "Turning designs into pixel-perfect clean code.",
    icon: "Code2"
  },
  {
    id: 6,
    name: "AI Design",
    description: "Leveraging GenAI for rapid ideation and assets.",
    icon: "Sparkles"
  }
];

export const PROCESS: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    description: "Understanding the core problem, audience, and goals."
  },
  {
    id: 2,
    title: "Research",
    description: "Analyzing competitors and gathering visual inspiration."
  },
  {
    id: 3,
    title: "Design",
    description: "Iterative prototyping and high-fidelity UI creation."
  },
  {
    id: 4,
    title: "Execution",
    description: "Development with clean code and smooth animations."
  },
  {
    id: 5,
    title: "Delivery",
    description: "Testing, optimization, and final launch."
  }
];