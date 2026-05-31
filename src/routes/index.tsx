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
    title: "Tópico IA Aplicada a Negócios",
    description: "Fundamentos práticos de IA para tomada de decisão.",
    materials: [
      { type: "pdf", title: "Apostila — IA aplicada a negócios.pdf" },
      { type: "video", title: "Aula 1 — Visão geral do mercado" },
      { type: "link", title: "Estudo de caso: automação de processos" },
      { type: "image", title: "Infográfico: ciclo de adoção de IA" },
    ],
  },
  {
    title: "Tópico Liderando em Tempos de IA",
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
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-12 flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center bg-primary">
            <BookOpen className="h-8 w-8 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">Plataforma de Cursos</h1>
            <p className="mt-1 text-base text-muted-foreground">Materiais e recursos dos tópicos</p>
          </div>
        </header>

        <div className="flex flex-col gap-6">
          {modulos.map((m, idx) => {
            const open = openIdx === idx;
            return (
              <div key={m.title} className="border-2 border-primary bg-card">
                <button
                  onClick={() => setOpenIdx(open ? null : idx)}
                  className="flex w-full items-stretch text-left"
                >
                  <div className="flex-1 bg-primary px-8 py-7 text-primary-foreground">
                    <h2 className="text-2xl font-bold md:text-3xl">{m.title}</h2>
                    <p className="mt-2 text-base text-primary-foreground/70">{m.description}</p>
                  </div>
                  <div className="flex w-28 flex-col items-center justify-center gap-2 bg-accent px-4 text-accent-foreground">
                    <span className="text-3xl font-bold leading-none">{m.materials.length}</span>
                    <span className="text-xs font-semibold uppercase tracking-wide">materiais</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>
                {open && (
                  <ul className="flex flex-col divide-y-2 divide-primary border-t-2 border-primary">
                    {m.materials.map((mat) => {
                      const Icon = typeIcon[mat.type];
                      return (
                        <li
                          key={mat.title}
                          className="flex items-center justify-between gap-4 px-8 py-5 hover:bg-muted"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center bg-accent">
                              <Icon className="h-5 w-5 text-accent-foreground" />
                            </div>
                            <span className="text-base font-medium text-foreground">{mat.title}</span>
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            {typeLabel[mat.type]}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
