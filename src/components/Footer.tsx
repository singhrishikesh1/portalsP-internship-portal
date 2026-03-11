import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <img src={logo} alt="PortalsP" className="h-7 w-auto rounded" />
            <span className="font-bold text-foreground">PortalsP</span>
          </div>
          <p className="text-sm text-muted-foreground">Find your dream internship at top companies worldwide.</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">For Students</h4>
          <div className="flex flex-col gap-2">
            <Link to="/internships" className="text-sm text-muted-foreground hover:text-foreground">Browse Internships</Link>
            <Link to="/register" className="text-sm text-muted-foreground hover:text-foreground">Create Account</Link>
            <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">Dashboard</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Resources</h4>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">Resume Tips</span>
            <span className="text-sm text-muted-foreground">Interview Prep</span>
            <span className="text-sm text-muted-foreground">Blog</span>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Company</h4>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">About</span>
            <span className="text-sm text-muted-foreground">Contact</span>
            <span className="text-sm text-muted-foreground">Privacy</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © 2026 PortalsP. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
