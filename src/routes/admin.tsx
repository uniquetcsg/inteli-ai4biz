import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Upload, Pencil, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel Admin — AI FOR BUSINESS" },
      { name: "description", content: "Gerencie módulos e materiais do curso." },
      { property: "og:title", content: "Painel Admin — AI FOR BUSINESS" },
      { property: "og:description", content: "Gerencie módulos e materiais do curso." },
    ],
  }),
  component: AdminPage,
});

const modulos = [
  { title: "Tópico IA Aplicada a Negócios", count: 4 },
  { title: "Tópico Liderando em Tempos de IA", count: 3 },
];

function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Admin</p>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Painel Admin</h1>
          <p className="mt-2 text-base text-muted-foreground">Gerencie seus tópicos e materiais</p>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          <Link
            to="/admin/modulos/novo"
            className="flex items-center justify-between gap-3 bg-primary px-6 py-5 text-lg font-bold uppercase tracking-wide text-primary-foreground hover:opacity-90"
          >
            Criar Tópico
            <Plus className="h-6 w-6" />
          </Link>
          <Link
            to="/admin/materiais"
            className="flex items-center justify-between gap-3 bg-segment px-6 py-5 text-lg font-bold uppercase tracking-wide text-segment-foreground hover:opacity-90"
          >
            Adicionar Material
            <Upload className="h-6 w-6" />
          </Link>
        </div>

        <div className="border-2 border-primary bg-card">
          <div className="bg-primary px-6 py-5 text-primary-foreground">
            <h2 className="text-2xl font-bold">Tópicos</h2>
            <p className="mt-1 text-sm text-primary-foreground/70">{modulos.length} tópicos cadastrados</p>
          </div>
          <ul className="divide-y-2 divide-primary">
            {modulos.map((m) => (
              <li key={m.title} className="flex items-center justify-between gap-4 px-6 py-5">
                <div>
                  <p className="text-lg font-bold text-foreground">{m.title}</p>
                  <p className="text-sm text-muted-foreground">{m.count} materiais</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="inline-flex h-12 w-12 items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button className="inline-flex h-12 w-12 items-center justify-center border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                    <Trash2 className="h-5 w-5" />
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