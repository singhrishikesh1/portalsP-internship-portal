import { X } from "lucide-react";

interface Filters {
  location: string;
  type: string;
  duration: string;
  stipend: string;
}

interface Props {
  filters: Filters;
  onChange: (f: Filters) => void;
  open: boolean;
  onClose: () => void;
}

const options = {
  location: ["All", "San Francisco", "New York", "Remote", "London", "Sydney"],
  type: ["All", "Remote", "On-site", "Hybrid"],
  duration: ["All", "1-2 months", "3-4 months", "5-6 months"],
  stipend: ["All", "$0-$1,000", "$1,000-$3,000", "$3,000+"],
};

const FilterSidebar = ({ filters, onChange, open, onClose }: Props) => {
  const content = (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between lg:hidden">
        <h3 className="text-lg font-semibold text-foreground">Filters</h3>
        <button onClick={onClose} className="rounded-lg p-1 hover:bg-secondary"><X className="h-5 w-5" /></button>
      </div>
      {(Object.keys(options) as (keyof typeof options)[]).map((key) => (
        <div key={key}>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {key === "type" ? "Work Type" : key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
          <div className="flex flex-col gap-1">
            {options[key].map((opt) => (
              <button
                key={opt}
                onClick={() => onChange({ ...filters, [key]: opt === "All" ? "" : opt })}
                className={`rounded-lg px-3 py-1.5 text-left text-sm transition-colors ${
                  (filters[key] === opt || (!filters[key] && opt === "All"))
                    ? "bg-accent/10 font-medium text-accent"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden w-56 shrink-0 lg:block">{content}</aside>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="absolute inset-0 bg-foreground/20" onClick={onClose} />
          <div className="relative ml-auto w-72 bg-card p-6 shadow-elevated overflow-y-auto">{content}</div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
