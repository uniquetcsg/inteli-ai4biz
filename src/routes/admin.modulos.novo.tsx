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
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-12 flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center bg-primary">
            <BookOpen className="h-8 w-8 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">Criar Tópico</h1>
            <p className="mt-1 text-base text-muted-foreground">Adicione um novo tópico ao curso</p>
          </div>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/admin" });
          }}
          className="flex flex-col gap-5"
        >
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do tópico"
            className="h-16 w-full bg-primary px-6 text-lg text-primary-foreground placeholder:text-primary-foreground/60 outline-none"
          />
          <textarea
            required
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição do tópico"
            className="w-full resize-none bg-primary px-6 py-5 text-lg text-primary-foreground placeholder:text-primary-foreground/60 outline-none"
          />
          <button
            type="submit"
            className="h-16 w-full bg-accent px-6 text-lg font-bold uppercase tracking-wide text-accent-foreground hover:opacity-90"
          >
            Criar Tópico
          </button>
        </form>
      </div>
    </div>
  );
}