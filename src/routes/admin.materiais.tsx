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
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-12 flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center bg-primary">
            <BookOpen className="h-8 w-8 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">Adicionar Materiais</h1>
            <p className="mt-1 text-base text-muted-foreground">
              Selecione o tópico e o tipo de material
            </p>
          </div>
        </header>

        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase tracking-wide text-foreground">Tópico</label>
              <div className="relative">
                <select
                  required
                  value={modulo}
                  onChange={(e) => setModulo(e.target.value)}
                  className="h-16 w-full appearance-none bg-primary px-6 pr-12 text-lg text-primary-foreground outline-none"
                >
                  <option value="">Selecione um tópico</option>
                  <option value="1">Tópico IA Aplicada a Negócios</option>
                  <option value="2">Tópico Liderando em Tempos de IA</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-primary-foreground" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase tracking-wide text-foreground">Tipo de Material</label>
              <div className="relative">
                <ActiveIcon className="pointer-events-none absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-accent" />
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value as typeof tipo)}
                  className="h-16 w-full appearance-none bg-primary pl-14 pr-12 text-lg text-primary-foreground outline-none"
                >
                  {tipos.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-primary-foreground" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase tracking-wide text-foreground">Arquivos</label>
              <div className="flex flex-col items-center justify-center gap-4 border-2 border-dashed border-primary bg-card px-6 py-16">
                <div className="flex h-16 w-16 items-center justify-center bg-accent">
                  <ActiveIcon className="h-8 w-8 text-accent-foreground" />
                </div>
                <p className="text-lg font-bold text-foreground">Arraste e solte arquivos aqui</p>
                <p className="text-sm text-muted-foreground">
                  ou clique para selecionar múltiplos arquivos
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="h-16 w-full bg-accent px-6 text-lg font-bold uppercase tracking-wide text-accent-foreground hover:opacity-90"
            >
              Adicionar Materiais
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}