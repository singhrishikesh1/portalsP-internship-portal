import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Bookmark, User } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/internships", label: "Internships" },
    { to: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="PortalsP" className="h-8 w-auto rounded" />
          <span className="text-lg font-bold text-foreground">PortalsP</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link to="/saved" className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <Bookmark className="h-5 w-5" />
          </Link>
          <Link to="/profile" className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/login" className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Log in
          </Link>
          <Link to="/register" className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90">
            Sign up
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-lg p-2 md:hidden">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary">
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-border" />
            <Link to="/saved" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary">Saved</Link>
            <Link to="/profile" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary">Profile</Link>
            <Link to="/login" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary">Log in</Link>
            <Link to="/register" onClick={() => setMobileOpen(false)} className="mt-1 rounded-lg bg-accent px-3 py-2 text-center text-sm font-medium text-accent-foreground">Sign up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
