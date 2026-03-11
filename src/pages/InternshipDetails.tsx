import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, Users, Bookmark, ArrowLeft, Building2, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternshipCard from "@/components/InternshipCard";
import { internships } from "@/data/mockData";

const InternshipDetails = () => {
  const { id } = useParams();
  const internship = internships.find((i) => i.id === id);
  const [saved, setSaved] = useState(false);
  const [applied, setApplied] = useState(false);

  if (!internship) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <p className="text-lg font-medium text-muted-foreground">Internship not found</p>
            <Link to="/internships" className="mt-2 inline-block text-sm text-accent hover:underline">Browse internships</Link>
          </div>
        </div>
      </div>
    );
  }

  const related = internships.filter((i) => i.id !== id && i.category === internship.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link to="/internships" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to internships
        </Link>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-lg font-bold text-secondary-foreground">
                {internship.companyLogo}
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground sm:text-2xl">{internship.title}</h1>
                <p className="flex items-center gap-1 text-sm text-muted-foreground"><Building2 className="h-4 w-4" />{internship.company}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setSaved(!saved)}
                className={`flex items-center gap-1.5 rounded-xl border px-4 py-2 text-sm font-medium transition-colors ${saved ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground hover:bg-secondary"}`}>
                <Bookmark className={`h-4 w-4 ${saved ? "fill-accent" : ""}`} />{saved ? "Saved" : "Save"}
              </button>
              <button className="rounded-xl border border-border p-2 text-muted-foreground hover:bg-secondary"><Share2 className="h-4 w-4" /></button>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: MapPin, label: "Location", value: internship.location },
              { icon: DollarSign, label: "Stipend", value: internship.stipend },
              { icon: Clock, label: "Duration", value: internship.duration },
              { icon: Users, label: "Applicants", value: `${internship.applicants}` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-lg bg-secondary p-3">
                <p className="mb-1 flex items-center gap-1 text-xs text-muted-foreground"><Icon className="h-3.5 w-3.5" />{label}</p>
                <p className="text-sm font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-sm font-semibold text-foreground">Skills Required</h2>
            <div className="flex flex-wrap gap-2">
              {internship.skills.map((s) => (
                <span key={s} className="rounded-lg bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{s}</span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="mb-2 text-sm font-semibold text-foreground">About this Internship</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{internship.description}</p>
          </div>

          <button onClick={() => setApplied(true)} disabled={applied}
            className={`w-full rounded-xl py-3 text-sm font-medium transition-colors ${applied ? "bg-green-600 text-accent-foreground cursor-default" : "bg-accent text-accent-foreground hover:bg-accent/90"}`}>
            {applied ? "✓ Application Submitted" : "Apply Now"}
          </button>
        </div>

        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-4 text-lg font-bold text-foreground">Similar Internships</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((i) => <InternshipCard key={i.id} internship={i} />)}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default InternshipDetails;
