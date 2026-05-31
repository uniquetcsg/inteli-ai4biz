import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b-2 border-primary bg-background">
      <div className="mx-auto flex max-w-5xl items-stretch justify-between gap-6 px-6 py-5">
        <Link to="/" className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center bg-primary">
            <BookOpen className="h-6 w-6 text-accent" />
          </div>
          <span className="hidden text-lg font-bold uppercase tracking-wide text-foreground sm:inline">
            AI FOR BUSINESS
          </span>
        </Link>
        <nav className="flex items-stretch gap-2">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "bg-primary text-primary-foreground" }}
            inactiveProps={{ className: "text-foreground hover:bg-muted" }}
            className="flex items-center px-5 text-sm font-bold uppercase tracking-wide"
          >
            Início
          </Link>
          <Link
            to="/sobre"
            activeProps={{ className: "bg-primary text-primary-foreground" }}
            inactiveProps={{ className: "text-foreground hover:bg-muted" }}
            className="flex items-center px-5 text-sm font-bold uppercase tracking-wide"
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}