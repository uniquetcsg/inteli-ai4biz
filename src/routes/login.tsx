import { createFileRoute, useNavigate } from "@tanstack/react-router";
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
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Acesso</p>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Login Admin</h1>
          <p className="mt-2 text-base text-muted-foreground">Acesse o painel administrativo</p>
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
            className="h-16 w-full bg-segment px-6 text-lg font-bold uppercase tracking-wide text-segment-foreground transition-opacity hover:opacity-90"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}