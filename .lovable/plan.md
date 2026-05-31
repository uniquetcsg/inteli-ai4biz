## Objetivo

Replicar fielmente os 5 wireframes do Figma como páginas navegáveis, sem backend nem persistência. Visual minimalista igual ao Figma (fundo branco, cards com borda sutil, ícone roxo claro, botões cinza/escuro).

## Estrutura de rotas

```text
src/routes/
  __root.tsx               -> mantém shell, adiciona <DemoSwitcher /> flutuante
  index.tsx                -> Visão Aluno (página inicial)
  login.tsx                -> Login Admin
  admin.tsx                -> Painel Admin
  admin.modulos.novo.tsx   -> Criar Módulo
  admin.materiais.tsx      -> Add Material
```

## Conteúdo de cada tela

**Visão Aluno (`/`)** — Header com ícone livro + "Plataforma de Cursos". Lista os 2 módulos como cards expansíveis:

- Módulo 1: IA Aplicada a Negócios
- Módulo 2: Liderando em Tempos de IA

Cada card mostra contagem de materiais e, ao expandir, lista PDFs / Links / Vídeos / Imagens com ícones.

**Login Admin (`/login`)** — Card centralizado com campos Email e Senha, botão "Entrar". Form puramente visual (submit → navega para `/admin`).

**Painel Admin (`/admin`)** — Header "Painel Admin / Gerencie seus módulos e materiais". Dois botões de ação: "Criar Módulo" e "Adicionar Material". Abaixo, lista dos 2 módulos com contagem de materiais e botões de editar/excluir (estáticos).

**Criar Módulo (`/admin/modulos/novo`)** — Form com Título do Módulo, Descrição, botão "Criar Módulo".

**Add Material (`/admin/materiais`)** — Réplica exata do screenshot: select de Módulo, select de Tipo de Material (PDF/Links/Vídeos/Imagens), área tracejada de upload com ícone, botão "Adicionar Materiais".

## Detalhes técnicos

- Tokens em `src/styles.css`: fundo branco, cinza-suave para muted, accent roxo claro (`oklch` próximo de `#a78bfa`/`#ede9fe`), border-radius médio, sombras leves.
- Componentes shadcn já disponíveis: `card`, `button`, `input`, `label`, `select`, `accordion` (para módulos do aluno), `badge`.
- Ícones via `lucide-react`: `BookOpen`, `FileText`, `Link`, `Video`, `Image`, `Upload`, `Plus`, `Pencil`, `Trash2`, `Eye`.
- Cada rota define seu próprio `head()` com title/description em português.
- Sem estado global, sem fetch, sem cloud. Selects e uploads são puramente visuais.
- Navegação entre telas via `<Link>` do `@tanstack/react-router`.
