import { Link } from "react-router-dom";
import { MapPin, Clock, Bookmark, Users } from "lucide-react";
import type { Internship } from "@/data/mockData";

interface Props {
  internship: Internship;
  saved?: boolean;
  onToggleSave?: (id: string) => void;
}

const InternshipCard = ({ internship, saved, onToggleSave }: Props) => (
  <div className="group relative rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5">
    <div className="mb-4 flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-secondary-foreground">
          {internship.companyLogo}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{internship.company}</p>
          <p className="text-xs text-muted-foreground">{internship.postedDate}</p>
        </div>
      </div>
      {onToggleSave && (
        <button onClick={() => onToggleSave(internship.id)} className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
          <Bookmark className={`h-4 w-4 ${saved ? "fill-accent text-accent" : ""}`} />
        </button>
      )}
    </div>

    <Link to={`/internship/${internship.id}`}>
      <h3 className="mb-2 text-base font-semibold text-foreground group-hover:text-accent transition-colors">{internship.title}</h3>
    </Link>

    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{internship.location}</span>
      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{internship.duration}</span>
      <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{internship.applicants} applicants</span>
    </div>

    <div className="mb-3 flex flex-wrap gap-1.5">
      {internship.skills.slice(0, 3).map((skill) => (
        <span key={skill} className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">{skill}</span>
      ))}
      {internship.skills.length > 3 && (
        <span className="rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground">+{internship.skills.length - 3}</span>
      )}
    </div>

    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-foreground">{internship.stipend}</span>
      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
        internship.type === "Remote" ? "bg-green-50 text-green-700" :
        internship.type === "Hybrid" ? "bg-blue-50 text-blue-700" :
        "bg-orange-50 text-orange-700"
      }`}>{internship.type}</span>
    </div>
  </div>
);

export default InternshipCard;
