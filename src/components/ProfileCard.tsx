import { Mail, MapPin, LinkIcon } from "lucide-react";

interface Props {
  name: string;
  email: string;
  location: string;
  avatar: string;
  completion: number;
}

const ProfileCard = ({ name, email, location, avatar, completion }: Props) => (
  <div className="rounded-xl border border-border bg-card p-6 shadow-card">
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground">
        {avatar}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <p className="flex items-center gap-1 text-sm text-muted-foreground"><Mail className="h-3.5 w-3.5" />{email}</p>
        <p className="flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{location}</p>
      </div>
    </div>
    <div className="mt-4">
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Profile completion</span>
        <span className="font-medium text-foreground">{completion}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${completion}%` }} />
      </div>
    </div>
  </div>
);

export default ProfileCard;
