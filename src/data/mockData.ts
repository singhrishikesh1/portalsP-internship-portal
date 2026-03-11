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
    company: "Razorpay",
    companyLogo: "R",
    location: "Bangalore, India",
    stipend: "₹40,000/mo",
    duration: "3 months",
    type: "Hybrid",
    skills: ["React", "TypeScript", "CSS", "Git"],
    description: "Join Razorpay's frontend team to build beautiful, accessible payment interfaces used by millions of businesses across India. You'll work closely with senior engineers on real product features, participate in code reviews, and learn best practices in modern web development.",
    postedDate: "2 days ago",
    applicants: 234,
    category: "Engineering",
  },
  {
    id: "2",
    title: "Product Design Intern",
    company: "Swiggy",
    companyLogo: "S",
    location: "Bangalore, India",
    stipend: "₹35,000/mo",
    duration: "6 months",
    type: "On-site",
    skills: ["Figma", "UI/UX", "Prototyping", "Research"],
    description: "Design the experiences that millions of users interact with daily. As a Product Design Intern at Swiggy, you'll collaborate with cross-functional teams to conceptualize, prototype, and ship features that delight customers across India.",
    postedDate: "1 day ago",
    applicants: 189,
    category: "Design",
  },
  {
    id: "3",
    title: "Data Science Intern",
    company: "Flipkart",
    companyLogo: "F",
    location: "Remote India",
    stipend: "₹45,000/mo",
    duration: "4 months",
    type: "Remote",
    skills: ["Python", "SQL", "Machine Learning", "Pandas"],
    description: "Dive deep into Flipkart's data to uncover insights that drive product decisions. You'll build models, create dashboards, and present findings to leadership. A perfect role for aspiring data scientists who want real-world impact at India's largest e-commerce platform.",
    postedDate: "3 days ago",
    applicants: 156,
    category: "Data Science",
  },
  {
    id: "4",
    title: "Backend Engineer Intern",
    company: "Zoho",
    companyLogo: "Z",
    location: "Chennai, India",
    stipend: "₹30,000/mo",
    duration: "3 months",
    type: "On-site",
    skills: ["Node.js", "PostgreSQL", "GraphQL", "TypeScript"],
    description: "Help build world-class business software at Zoho. You'll work on API design, database optimization, and real-time features that power teams at companies worldwide.",
    postedDate: "5 days ago",
    applicants: 198,
    category: "Engineering",
  },
  {
    id: "5",
    title: "Marketing Intern",
    company: "PhonePe",
    companyLogo: "P",
    location: "Pune, India",
    stipend: "₹25,000/mo",
    duration: "6 months",
    type: "Hybrid",
    skills: ["Content Writing", "SEO", "Analytics", "Social Media"],
    description: "Join PhonePe's growth marketing team to create compelling content, optimize campaigns, and analyze performance across channels. Gain hands-on experience in digital marketing at one of India's leading fintech companies.",
    postedDate: "1 week ago",
    applicants: 312,
    category: "Marketing",
  },
  {
    id: "6",
    title: "Mobile Developer Intern",
    company: "Infosys",
    companyLogo: "I",
    location: "Hyderabad, India",
    stipend: "₹28,000/mo",
    duration: "4 months",
    type: "On-site",
    skills: ["React Native", "Swift", "Kotlin", "REST APIs"],
    description: "Build mobile solutions for enterprise clients at Infosys. Work with cross-platform mobile technologies and contribute to apps used by millions of users globally.",
    postedDate: "4 days ago",
    applicants: 267,
    category: "Engineering",
  },
  {
    id: "7",
    title: "AI/ML Research Intern",
    company: "TCS",
    companyLogo: "T",
    location: "Mumbai, India",
    stipend: "₹50,000/mo",
    duration: "3 months",
    type: "On-site",
    skills: ["Python", "PyTorch", "NLP", "Deep Learning"],
    description: "Contribute to cutting-edge AI research at TCS Research. You'll work on language models, computer vision, and applied ML — pushing the boundaries of what's possible with artificial intelligence for enterprise solutions.",
    postedDate: "6 days ago",
    applicants: 445,
    category: "AI/ML",
  },
  {
    id: "8",
    title: "Business Analyst Intern",
    company: "Wipro",
    companyLogo: "W",
    location: "Delhi, India",
    stipend: "₹32,000/mo",
    duration: "2 months",
    type: "On-site",
    skills: ["Excel", "PowerPoint", "Data Analysis", "Strategy"],
    description: "Work alongside top consultants on real client engagements. Develop strategic recommendations, build financial models, and present insights to senior leadership at one of India's largest IT services companies.",
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
  { name: "TCS", openings: 18, logo: "T" },
  { name: "Infosys", openings: 14, logo: "I" },
  { name: "Wipro", openings: 10, logo: "W" },
  { name: "Zoho", openings: 8, logo: "Z" },
  { name: "Razorpay", openings: 12, logo: "R" },
  { name: "Flipkart", openings: 15, logo: "F" },
];
