interface Application {
  id: string;
  title: string;
  company: string;
  status: "Applied" | "In Review" | "Interview" | "Offered" | "Rejected";
  date: string;
}

const statusColors: Record<string, string> = {
  Applied: "bg-blue-50 text-blue-700",
  "In Review": "bg-yellow-50 text-yellow-700",
  Interview: "bg-purple-50 text-purple-700",
  Offered: "bg-green-50 text-green-700",
  Rejected: "bg-red-50 text-red-700",
};

const ApplicationTracker = ({ applications }: { applications: Application[] }) => (
  <div className="rounded-xl border border-border bg-card shadow-card">
    <div className="border-b border-border px-5 py-4">
      <h3 className="text-sm font-semibold text-foreground">Application Tracker</h3>
    </div>
    <div className="divide-y divide-border">
      {applications.map((app) => (
        <div key={app.id} className="flex items-center justify-between px-5 py-3">
          <div>
            <p className="text-sm font-medium text-foreground">{app.title}</p>
            <p className="text-xs text-muted-foreground">{app.company} · {app.date}</p>
          </div>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[app.status]}`}>{app.status}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ApplicationTracker;
export type { Application };
