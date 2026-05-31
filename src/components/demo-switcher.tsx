import { Link, useRouterState } from "@tanstack/react-router";
import { Eye } from "lucide-react";

const links = [
  { to: "/", label: "Visão Aluno" },
  { to: "/login", label: "Login Admin" },
  { to: "/admin", label: "Painel Admin" },
  { to: "/admin/modulos/novo", label: "Criar Módulo" },
  { to: "/admin/materiais", label: "Add Material" },
] as const;

export function DemoSwitcher() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="fixed right-4 top-4 z-50 w-56 rounded-xl border border-border bg-card p-3 shadow-sm">
      <div className="mb-2 flex items-center gap-2 px-1 text-xs text-muted-foreground">
        <Eye className="h-3.5 w-3.5" />
        <span>Wireframes Demo</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {links.map((l) => {
          const active = pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-md border px-3 py-1.5 text-center text-sm transition-colors ${
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
        <div className="mt-1 rounded-md bg-muted px-3 py-1.5 text-center text-xs text-muted-foreground">
          Autenticado
        </div>
      </div>
    </div>
  );
}