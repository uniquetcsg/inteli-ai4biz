import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, FileText, Link as LinkIcon, Video, Image as ImageIcon, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plataforma de Cursos — Visão Aluno" },
      { name: "description", content: "Acesse os materiais dos módulos do curso." },
      { property: "og:title", content: "Plataforma de Cursos — Visão Aluno" },
      { property: "og:description", content: "Acesse os materiais dos módulos do curso." },
    ],
  }),
  component: Index,
});

type Material = { type: "pdf" | "link" | "video" | "image"; title: string };

const modulos: { title: string; description: string; materials: Material[] }[] = [
  {
    title: "Módulo 1: IA Aplicada a Negócios",
    description: "Fundamentos práticos de IA para tomada de decisão.",
    materials: [
      { type: "pdf", title: "Apostila — IA aplicada a negócios.pdf" },
      { type: "video", title: "Aula 1 — Visão geral do mercado" },
      { type: "link", title: "Estudo de caso: automação de processos" },
      { type: "image", title: "Infográfico: ciclo de adoção de IA" },
    ],
  },
  {
    title: "Módulo 2: Liderando em Tempos de IA",
    description: "Como liderar equipes e projetos em um mundo com IA.",
    materials: [
      { type: "pdf", title: "Guia do líder — Era da IA.pdf" },
      { type: "video", title: "Aula 2 — Cultura e mudança" },
      { type: "link", title: "Frameworks de governança de IA" },
    ],
  },
];

const typeIcon = {
  pdf: FileText,
  link: LinkIcon,
  video: Video,
  image: ImageIcon,
} as const;

const typeLabel = {
  pdf: "PDF",
  link: "Link",
  video: "Vídeo",
  image: "Imagem",
} as const;

function Index() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <BookOpen className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Plataforma de Cursos</h1>
            <p className="text-sm text-muted-foreground">Materiais e recursos dos módulos</p>
          </div>
        </header>

        <div className="flex flex-col gap-4">
          {modulos.map((m, idx) => {
            const open = openIdx === idx;
            return (
              <div key={m.title} className="rounded-xl border border-border bg-card">
                <button
                  onClick={() => setOpenIdx(open ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <div>
                    <h2 className="text-base font-semibold text-foreground">{m.title}</h2>
                    <p className="mt-0.5 text-sm text-muted-foreground">{m.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                      {m.materials.length} materiais
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>
                {open && (
                  <div className="border-t border-border px-5 py-3">
                    <ul className="flex flex-col">
                      {m.materials.map((mat) => {
                        const Icon = typeIcon[mat.type];
                        return (
                          <li
                            key={mat.title}
                            className="flex items-center justify-between gap-3 rounded-md px-2 py-2.5 hover:bg-muted/50"
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="h-4 w-4 text-accent-foreground" />
                              <span className="text-sm text-foreground">{mat.title}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{typeLabel[mat.type]}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
