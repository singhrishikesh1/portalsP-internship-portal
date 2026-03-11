import { useState, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternshipCard from "@/components/InternshipCard";
import SearchBar from "@/components/SearchBar";
import FilterSidebar from "@/components/FilterSidebar";
import { internships } from "@/data/mockData";

const Internships = () => {
  const [search, setSearch] = useState("");
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({ location: "", type: "", duration: "", stipend: "" });

  const toggleSave = (id: string) => setSavedIds((s) => s.includes(id) ? s.filter((i) => i !== id) : [...s, id]);

  const filtered = useMemo(() => {
    return internships.filter((i) => {
      const q = search.toLowerCase();
      const matchSearch = !q || i.title.toLowerCase().includes(q) || i.company.toLowerCase().includes(q) || i.skills.some((s) => s.toLowerCase().includes(q));
      const matchLocation = !filters.location || i.location.includes(filters.location);
      const matchType = !filters.type || i.type === filters.type;
      return matchSearch && matchLocation && matchType;
    });
  }, [search, filters]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="mb-1 text-2xl font-bold text-foreground">Browse Internships</h1>
          <p className="text-sm text-muted-foreground">{filtered.length} internships found</p>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <SearchBar value={search} onChange={setSearch} />
          <button onClick={() => setFilterOpen(true)} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary lg:hidden">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>

        <div className="flex gap-8">
          <FilterSidebar filters={filters} onChange={setFilters} open={filterOpen} onClose={() => setFilterOpen(false)} />
          <div className="flex-1">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((i) => (
                <InternshipCard key={i.id} internship={i} saved={savedIds.includes(i.id)} onToggleSave={toggleSave} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-lg font-medium text-muted-foreground">No internships found</p>
                <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Internships;
