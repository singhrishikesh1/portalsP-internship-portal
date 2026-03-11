export interface Internship {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  stipend: string;
  duration: string;
  type: "Remote" | "On-site" | "Hybrid";
  skills: string[];
  description: string;
  postedDate: string;
  applicants: number;
  category: string;
}

export const internships: Internship[] = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "Stripe",
    companyLogo: "S",
    location: "San Francisco, CA",
    stipend: "$3,000/mo",
    duration: "3 months",
    type: "Hybrid",
    skills: ["React", "TypeScript", "CSS", "Git"],
    description: "Join Stripe's frontend team to build beautiful, accessible payment interfaces used by millions of businesses worldwide. You'll work closely with senior engineers on real product features, participate in code reviews, and learn best practices in modern web development. This is a unique opportunity to impact the future of internet commerce.",
    postedDate: "2 days ago",
    applicants: 234,
    category: "Engineering",
  },
  {
    id: "2",
    title: "Product Design Intern",
    company: "Figma",
    companyLogo: "F",
    location: "New York, NY",
    stipend: "$2,800/mo",
    duration: "6 months",
    type: "On-site",
    skills: ["Figma", "UI/UX", "Prototyping", "Research"],
    description: "Design the tools that designers use every day. As a Product Design Intern at Figma, you'll collaborate with cross-functional teams to conceptualize, prototype, and ship features that empower creative professionals around the world.",
    postedDate: "1 day ago",
    applicants: 189,
    category: "Design",
  },
  {
    id: "3",
    title: "Data Science Intern",
    company: "Notion",
    companyLogo: "N",
    location: "Remote",
    stipend: "$3,200/mo",
    duration: "4 months",
    type: "Remote",
    skills: ["Python", "SQL", "Machine Learning", "Pandas"],
    description: "Dive deep into Notion's data to uncover insights that drive product decisions. You'll build models, create dashboards, and present findings to leadership. A perfect role for aspiring data scientists who want real-world impact.",
    postedDate: "3 days ago",
    applicants: 156,
    category: "Data Science",
  },
  {
    id: "4",
    title: "Backend Engineer Intern",
    company: "Linear",
    companyLogo: "L",
    location: "San Francisco, CA",
    stipend: "$3,500/mo",
    duration: "3 months",
    type: "Remote",
    skills: ["Node.js", "PostgreSQL", "GraphQL", "TypeScript"],
    description: "Help build the fastest project management tool in the world. You'll work on API design, database optimization, and real-time sync features that power teams at companies like Vercel, Coinbase, and more.",
    postedDate: "5 days ago",
    applicants: 198,
    category: "Engineering",
  },
  {
    id: "5",
    title: "Marketing Intern",
    company: "Canva",
    companyLogo: "C",
    location: "Sydney, Australia",
    stipend: "$2,500/mo",
    duration: "6 months",
    type: "Hybrid",
    skills: ["Content Writing", "SEO", "Analytics", "Social Media"],
    description: "Join Canva's growth marketing team to create compelling content, optimize campaigns, and analyze performance across channels. You'll gain hands-on experience in digital marketing at a global scale.",
    postedDate: "1 week ago",
    applicants: 312,
    category: "Marketing",
  },
  {
    id: "6",
    title: "Mobile Developer Intern",
    company: "Spotify",
    companyLogo: "S",
    location: "Stockholm, Sweden",
    stipend: "$2,900/mo",
    duration: "4 months",
    type: "On-site",
    skills: ["React Native", "Swift", "Kotlin", "REST APIs"],
    description: "Build features for the world's most popular music streaming app. Work with cross-platform mobile technologies and contribute to an app used by 500M+ users globally.",
    postedDate: "4 days ago",
    applicants: 267,
    category: "Engineering",
  },
  {
    id: "7",
    title: "AI/ML Research Intern",
    company: "OpenAI",
    companyLogo: "O",
    location: "San Francisco, CA",
    stipend: "$5,000/mo",
    duration: "3 months",
    type: "On-site",
    skills: ["Python", "PyTorch", "NLP", "Deep Learning"],
    description: "Contribute to cutting-edge AI research at OpenAI. You'll work on language models, safety research, and alignment — pushing the boundaries of what's possible with artificial intelligence.",
    postedDate: "6 days ago",
    applicants: 445,
    category: "AI/ML",
  },
  {
    id: "8",
    title: "Business Analyst Intern",
    company: "McKinsey",
    companyLogo: "M",
    location: "Chicago, IL",
    stipend: "$4,000/mo",
    duration: "2 months",
    type: "On-site",
    skills: ["Excel", "PowerPoint", "Data Analysis", "Strategy"],
    description: "Work alongside top consultants on real client engagements. Develop strategic recommendations, build financial models, and present insights to C-level executives.",
    postedDate: "3 days ago",
    applicants: 523,
    category: "Business",
  },
];

export const categories = [
  { name: "Engineering", count: 1240, icon: "💻" },
  { name: "Design", count: 580, icon: "🎨" },
  { name: "Data Science", count: 430, icon: "📊" },
  { name: "Marketing", count: 890, icon: "📈" },
  { name: "Business", count: 670, icon: "💼" },
  { name: "AI/ML", count: 320, icon: "🤖" },
];

export const companies = [
  { name: "Stripe", openings: 12, logo: "S" },
  { name: "Figma", openings: 8, logo: "F" },
  { name: "Notion", openings: 6, logo: "N" },
  { name: "Linear", openings: 5, logo: "L" },
  { name: "Vercel", openings: 9, logo: "V" },
  { name: "OpenAI", openings: 15, logo: "O" },
];
