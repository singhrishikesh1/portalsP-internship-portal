import { Briefcase, Bookmark, TrendingUp, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import ApplicationTracker from "@/components/ApplicationTracker";
import InternshipCard from "@/components/InternshipCard";
import { internships } from "@/data/mockData";
import type { Application } from "@/components/ApplicationTracker";

const mockApplications: Application[] = [
  { id: "1", title: "Frontend Developer Intern", company: "Stripe", status: "Interview", date: "Mar 5, 2026" },
  { id: "2", title: "Product Design Intern", company: "Figma", status: "In Review", date: "Mar 3, 2026" },
  { id: "3", title: "Data Science Intern", company: "Notion", status: "Applied", date: "Mar 1, 2026" },
  { id: "4", title: "Marketing Intern", company: "Canva", status: "Rejected", date: "Feb 25, 2026" },
];

const stats = [
  { label: "Applied", value: "12", icon: Briefcase, color: "text-accent" },
  { label: "Saved", value: "8", icon: Bookmark, color: "text-accent" },
  { label: "In Review", value: "3", icon: TrendingUp, color: "text-accent" },
  { label: "Offers", value: "1", icon: CheckCircle, color: "text-green-600" },
];

const Dashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold text-foreground">Dashboard</h1>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(({ label, value, icon: Icon, color }) => (
              <div key={label} className="rounded-xl border border-border bg-card p-4 shadow-card">
                <Icon className={`mb-2 h-5 w-5 ${color}`} />
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>

          <ApplicationTracker applications={mockApplications} />

          {/* Recommended */}
          <div>
            <h2 className="mb-3 text-sm font-semibold text-foreground">Recommended for You</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {internships.slice(4, 6).map((i) => <InternshipCard key={i.id} internship={i} />)}
            </div>
          </div>
        </div>

        <div>
          <ProfileCard name="Alex Johnson" email="alex@university.edu" location="San Francisco, CA" avatar="A" completion={72} />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Dashboard;
