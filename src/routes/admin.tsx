import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Plus, Upload, Pencil, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel Admin — Plataforma de Cursos" },
      { name: "description", content: "Gerencie módulos e materiais do curso." },
      { property: "og:title", content: "Painel Admin — Plataforma de Cursos" },
      { property: "og:description", content: "Gerencie módulos e materiais do curso." },
    ],
  }),
  component: AdminPage,
});

const modulos = [
  { title: "Módulo 1: IA Aplicada a Negócios", count: 4 },
  { title: "Módulo 2: Liderando em Tempos de IA", count: 3 },
];

function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <BookOpen className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Painel Admin</h1>
            <p className="text-sm text-muted-foreground">Gerencie seus módulos e materiais</p>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            to="/admin/modulos/novo"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
          >
            <Plus className="h-4 w-4" />
            Criar Módulo
          </Link>
          <Link
            to="/admin/materiais"
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
          >
            <Upload className="h-4 w-4" />
            Adicionar Material
          </Link>
        </div>

        <div className="rounded-xl border border-border bg-card">
          <div className="border-b border-border px-5 py-4">
            <h2 className="text-base font-semibold text-foreground">Módulos</h2>
            <p className="text-sm text-muted-foreground">{modulos.length} módulos cadastrados</p>
          </div>
          <ul className="divide-y divide-border">
            {modulos.map((m) => (
              <li key={m.title} className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{m.title}</p>
                  <p className="text-xs text-muted-foreground">{m.count} materiais</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-input text-muted-foreground hover:bg-muted">
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-input text-muted-foreground hover:bg-muted">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}