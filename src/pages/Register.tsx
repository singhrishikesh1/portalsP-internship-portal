import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <span className="text-sm font-bold text-accent-foreground">P</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Create your account</h1>
            <p className="mt-1 text-sm text-muted-foreground">Start discovering internships today</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-foreground">Full Name</label>
              <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)}
                className="w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="John Doe" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-foreground">Email</label>
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
                className="w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-foreground">Password</label>
              <input type="password" value={form.password} onChange={(e) => update("password", e.target.value)}
                className="w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Min. 8 characters" />
            </div>
            <button type="submit" className="rounded-xl bg-accent py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90">
              Create account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="font-medium text-accent hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
