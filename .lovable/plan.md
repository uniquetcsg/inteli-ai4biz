## Objetivo

Atualizar o visual de todas as páginas para um padrão mais moderno e bold, inspirado no input anexado (campo roxo grande com botão amarelo, cantos 100% retos), mantendo a paleta Inteli já configurada (roxo `#2e2640`, coral, verde, amarelo como accent novo, cinzas).

## Mudanças de design tokens (`src/styles.css`)

- `--radius: 0` → todos os componentes ganham cantos retos (sem `rounded-*`).
- Adicionar `--c-amarelo: #e8ff3a` (amarelo do botão de check da referência) e mapear como novo `--accent` / `--accent-foreground: #2e2640`.
- Reforçar `--primary: #2e2640` (roxo profundo) como cor dominante de superfícies de destaque (cards de módulo, inputs).
- Aumentar escala tipográfica base e pesos (headings mais grossos via Platypi 700+).

## Mudanças por página

Padrão visual aplicado em todas:
- Container mais largo (`max-w-5xl` no lugar de `max-w-3xl`).
- Sem bordas arredondadas em nenhum elemento (cards, botões, inputs, badges, chips).
- Inputs e botões altos (h-14/h-16), texto grande, sem borda — fundo roxo com texto branco; ações primárias em bloco amarelo ao lado (estilo da referência).
- Headers maiores, com título grande em Platypi.

### `src/routes/index.tsx` (Visão Aluno)
- Header maior; cards de tópicos como blocos largos roxos com título branco grande e badge amarelo de contagem.
- Lista de materiais em linhas grandes, divisores retos, ícones maiores.

### `src/routes/login.tsx`
- Form em bloco único: inputs grandes roxos + botão "Entrar" amarelo grande à direita (espelhando a referência).

### `src/routes/admin.tsx`
- Botões de ação grandes e retos (primário roxo, secundário com borda).
- Lista de módulos em blocos largos com ações maiores.

### `src/routes/admin.modulos.novo.tsx`
- Inputs grandes roxos, botão amarelo grande de "Criar Módulo".

### `src/routes/admin.materiais.tsx`
- Selects e área de upload em blocos retos grandes; botão final amarelo full-width.

## Fora de escopo

- Sem mudanças de conteúdo, rotas ou lógica.
- Sem novos componentes/bibliotecas — só Tailwind + tokens.
