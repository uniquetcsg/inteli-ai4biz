import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — AI FOR BUSINESS" },
      { name: "description", content: "Conheça o autor por trás da plataforma de cursos." },
      { property: "og:title", content: "Sobre — AI FOR BUSINESS" },
      { property: "og:description", content: "Conheça o autor por trás da plataforma de cursos." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Sobre</p>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Sobre o autor</h1>
        </div>

        <div className="border-2 border-primary bg-card">
          <div className="bg-primary px-8 py-7 text-primary-foreground">
            <h2 className="text-2xl font-bold md:text-3xl">Conteúdo em breve</h2>
          </div>
          <div className="px-8 py-10">
            <p className="text-lg text-foreground">
              As informações sobre o autor serão publicadas aqui em breve.
            </p>
            <p className="mt-3 text-base text-muted-foreground">
              Esta seção apresentará a trajetória, atuação e referências do autor responsável
              pelos materiais e tópicos desta plataforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}