import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/modulos/novo")({
  head: () => ({
    meta: [
      { title: "Criar Módulo — Painel Admin" },
      { name: "description", content: "Crie um novo módulo do curso." },
      { property: "og:title", content: "Criar Módulo — Painel Admin" },
      { property: "og:description", content: "Crie um novo módulo do curso." },
    ],
  }),
  component: NovoModuloPage,
});

function NovoModuloPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <BookOpen className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Criar Módulo</h1>
            <p className="text-sm text-muted-foreground">Adicione um novo módulo ao curso</p>
          </div>
        </header>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-base font-semibold text-foreground">Novo Módulo</h2>
          <p className="mb-5 text-sm text-muted-foreground">Preencha as informações do módulo</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/admin" });
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Título do Módulo *</label>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: IA Aplicada a Negócios"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Descrição *</label>
              <textarea
                required
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Breve descrição do que será abordado neste módulo"
                className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:opacity-90"
            >
              Criar Módulo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}