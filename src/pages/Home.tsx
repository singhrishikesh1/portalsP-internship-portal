import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, Building2, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternshipCard from "@/components/InternshipCard";
import SearchBar from "@/components/SearchBar";
import { internships, categories, companies } from "@/data/mockData";

const Home = () => {
  const [search, setSearch] = useState("");
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleSave = (id: string) => setSavedIds((s) => s.includes(id) ? s.filter((i) => i !== id) : [...s, id]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <Sparkles className="h-3.5 w-3.5" /> 2,500+ internships available
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Launch your career with the right internship
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Discover internships at top startups and companies. Build real experience, grow your skills, and start your professional journey.
            </p>
            <div className="flex justify-center">
              <SearchBar value={search} onChange={setSearch} placeholder="Search by role, company, or skill..." large />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
              <span>Popular:</span>
              {["Frontend", "Data Science", "Design", "Marketing"].map((t) => (
                <button key={t} onClick={() => navigate("/internships")} className="rounded-md bg-secondary px-2 py-1 font-medium text-secondary-foreground hover:bg-muted transition-colors">{t}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <h2 className="text-xl font-bold text-foreground">Trending Internships</h2>
            </div>
            <Link to="/internships" className="flex items-center gap-1 text-sm font-medium text-accent hover:underline">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {internships.slice(0, 4).map((i) => (
              <InternshipCard key={i.id} internship={i} saved={savedIds.includes(i.id)} onToggleSave={toggleSave} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-xl font-bold text-foreground">Browse by Category</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link key={cat.name} to="/internships"
                className="group flex items-center justify-between rounded-xl border border-border bg-background p-4 transition-all hover:shadow-card-hover hover:-translate-y-0.5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{cat.name}</p>
                    <p className="text-xs text-muted-foreground">{cat.count.toLocaleString()} openings</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold text-foreground">Top Companies Hiring</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((c) => (
              <div key={c.name} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-secondary-foreground">{c.logo}</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.openings} open positions</p>
                </div>
                <Link to="/internships" className="text-xs font-medium text-accent hover:underline">View →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-foreground">Ready to start your journey?</h2>
          <p className="mb-6 text-muted-foreground">Create your profile, upload your resume, and start applying to internships today.</p>
          <Link to="/register" className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90">
            Get Started Free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
