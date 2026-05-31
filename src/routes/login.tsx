import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login Admin — Plataforma de Cursos" },
      { name: "description", content: "Acesso restrito ao painel administrativo." },
      { property: "og:title", content: "Login Admin — Plataforma de Cursos" },
      { property: "og:description", content: "Acesso restrito ao painel administrativo." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-2xl">
        <div className="mb-10 flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center bg-primary">
            <BookOpen className="h-8 w-8 text-accent" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">Login Admin</h1>
            <p className="mt-1 text-base text-muted-foreground">Acesse o painel administrativo</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/admin" });
          }}
          className="flex flex-col gap-5"
        >
          <div className="flex items-stretch">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className="h-16 w-full bg-primary px-6 text-lg text-primary-foreground placeholder:text-primary-foreground/60 outline-none"
            />
          </div>
          <div className="flex items-stretch">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="h-16 w-full bg-primary px-6 text-lg text-primary-foreground placeholder:text-primary-foreground/60 outline-none"
            />
          </div>

          <button
            type="submit"
            className="h-16 w-full bg-accent px-6 text-lg font-bold uppercase tracking-wide text-accent-foreground transition-opacity hover:opacity-90"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}