import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, FileText, Link as LinkIcon, Video, Image as ImageIcon, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/materiais")({
  head: () => ({
    meta: [
      { title: "Adicionar Materiais — Painel Admin" },
      { name: "description", content: "Faça upload de materiais para os módulos do curso." },
      { property: "og:title", content: "Adicionar Materiais — Painel Admin" },
      { property: "og:description", content: "Faça upload de materiais para os módulos do curso." },
    ],
  }),
  component: MateriaisPage,
});

const tipos = [
  { value: "pdf", label: "PDF", Icon: FileText },
  { value: "link", label: "Links", Icon: LinkIcon },
  { value: "video", label: "Vídeos", Icon: Video },
  { value: "image", label: "Imagens", Icon: ImageIcon },
] as const;

function MateriaisPage() {
  const [modulo, setModulo] = useState("");
  const [tipo, setTipo] = useState<(typeof tipos)[number]["value"]>("pdf");

  const ActiveIcon = tipos.find((t) => t.value === tipo)!.Icon;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Painel Admin</h1>
            <p className="text-sm text-muted-foreground">Adicionar materiais ao curso</p>
          </div>
        </header>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-base font-semibold text-foreground">Adicionar Materiais</h2>
          <p className="mb-5 text-sm text-muted-foreground">
            Selecione o módulo e o tipo de material que deseja adicionar
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Módulo *</label>
              <div className="relative">
                <select
                  required
                  value={modulo}
                  onChange={(e) => setModulo(e.target.value)}
                  className="w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring"
                >
                  <option value="">Selecione um módulo</option>
                  <option value="1">Módulo 1: IA Aplicada a Negócios</option>
                  <option value="2">Módulo 2: Liderando em Tempos de IA</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Tipo de Material *</label>
              <div className="relative">
                <ActiveIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value as typeof tipo)}
                  className="w-full appearance-none rounded-md border border-input bg-background py-2 pl-9 pr-3 text-sm outline-none focus:border-ring"
                >
                  {tipos.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">Arquivos *</label>
              <div className="flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border bg-background/50 px-6 py-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <ActiveIcon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Arraste e solte arquivos aqui</p>
                <p className="text-xs text-muted-foreground">
                  ou clique para selecionar múltiplos arquivos
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="mt-1 w-full rounded-md bg-muted-foreground/70 px-4 py-2.5 text-sm font-medium text-background hover:opacity-90"
            >
              Adicionar Materiais
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}