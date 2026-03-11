import { useState } from "react";
import { Upload, Plus, X, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";

const Profile = () => {
  const [skills, setSkills] = useState(["React", "TypeScript", "Python", "Figma"]);
  const [newSkill, setNewSkill] = useState("");
  const [portfolioLinks, setPortfolioLinks] = useState(["https://github.com/rishikesh-singh", "https://linkedin.com/in/rishikesh-singh"]);
  const [newLink, setNewLink] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const addLink = () => {
    if (newLink.trim()) {
      setPortfolioLinks([...portfolioLinks, newLink.trim()]);
      setNewLink("");
    }
  };

  const inputClass = "w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-2xl font-bold text-foreground">My Profile</h1>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ProfileCard name="Rishikesh Singh" email="rishikesh@university.edu" location="Pune, Maharashtra, India" avatar="R" completion={72} />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Personal Info */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="mb-4 text-sm font-semibold text-foreground">Personal Information</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">Full Name</label>
                  <input defaultValue="Rishikesh Singh" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">Email</label>
                  <input defaultValue="rishikesh@university.edu" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">Phone</label>
                  <input defaultValue="+91 9999999999" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">Location</label>
                  <input defaultValue="Pune, Maharashtra, India" className={inputClass} />
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="mb-4 text-sm font-semibold text-foreground">Education</h2>
              <div className="rounded-lg bg-secondary p-4">
                <p className="text-sm font-medium text-foreground">G H Raisoni College of Engineering and Management, Pune</p>
                <p className="text-xs text-muted-foreground">BTech in Computer Engineering · 2024 – 2028</p>
                <p className="text-xs text-muted-foreground">GPA: 9.75/10.0</p>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="mb-4 text-sm font-semibold text-foreground">Skills</h2>
              <div className="mb-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="flex items-center gap-1 rounded-lg bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {skill}
                    <button onClick={() => setSkills(skills.filter((s) => s !== skill))} className="text-muted-foreground hover:text-foreground">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input value={newSkill} onChange={(e) => setNewSkill(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addSkill()}
                  placeholder="Add a skill" className={inputClass} />
                <button onClick={addSkill} className="rounded-xl bg-secondary px-3 text-muted-foreground hover:bg-muted"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            {/* Resume */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="mb-4 text-sm font-semibold text-foreground">Resume</h2>
              <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-border py-8 transition-colors hover:border-accent/50 hover:bg-accent/5 cursor-pointer">
                <div className="text-center">
                  <Upload className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                  <p className="text-sm font-medium text-foreground">Upload your resume</p>
                  <p className="text-xs text-muted-foreground">PDF, DOC up to 5MB</p>
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="mb-4 text-sm font-semibold text-foreground">Portfolio Links</h2>
              <div className="mb-3 flex flex-col gap-2">
                {portfolioLinks.map((link) => (
                  <div key={link} className="flex items-center justify-between rounded-lg bg-secondary px-3 py-2">
                    <span className="flex items-center gap-1.5 text-xs text-secondary-foreground"><ExternalLink className="h-3 w-3" />{link}</span>
                    <button onClick={() => setPortfolioLinks(portfolioLinks.filter((l) => l !== link))} className="text-muted-foreground hover:text-foreground">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input value={newLink} onChange={(e) => setNewLink(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addLink()}
                  placeholder="https://..." className={inputClass} />
                <button onClick={addLink} className="rounded-xl bg-secondary px-3 text-muted-foreground hover:bg-muted"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            <button className="self-end rounded-xl bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
