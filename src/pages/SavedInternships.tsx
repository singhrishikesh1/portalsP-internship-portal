import { useState } from "react";
import { Bookmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternshipCard from "@/components/InternshipCard";
import { internships } from "@/data/mockData";

const SavedInternships = () => {
  const [savedIds, setSavedIds] = useState(["1", "3", "5"]);
  const toggleSave = (id: string) => setSavedIds((s) => s.includes(id) ? s.filter((i) => i !== id) : [...s, id]);
  const saved = internships.filter((i) => savedIds.includes(i.id));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-2">
          <Bookmark className="h-5 w-5 text-accent" />
          <h1 className="text-2xl font-bold text-foreground">Saved Internships</h1>
        </div>
        {saved.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {saved.map((i) => <InternshipCard key={i.id} internship={i} saved onToggleSave={toggleSave} />)}
          </div>
        ) : (
          <div className="py-20 text-center">
            <Bookmark className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
            <p className="text-lg font-medium text-muted-foreground">No saved internships yet</p>
            <p className="text-sm text-muted-foreground">Browse internships and save the ones you're interested in</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SavedInternships;
