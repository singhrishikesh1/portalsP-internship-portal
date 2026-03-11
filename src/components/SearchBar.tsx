import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  large?: boolean;
}

const SearchBar = ({ value, onChange, placeholder = "Search internships...", large }: Props) => (
  <div className={`relative w-full ${large ? "max-w-2xl" : ""}`}>
    <Search className={`absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground ${large ? "h-5 w-5" : "h-4 w-4"}`} />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all ${
        large ? "py-3.5 pl-11 pr-4 text-base shadow-card" : "py-2.5 pl-9 pr-4 text-sm"
      }`}
    />
  </div>
);

export default SearchBar;
