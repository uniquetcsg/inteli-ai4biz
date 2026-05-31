## Diagnóstico

O componente `SiteHeader` (em `src/components/site-header.tsx`) existe e contém os links **Início** e **Sobre**, mas não está sendo importado nem renderizado em lugar nenhum do projeto — por isso o menu sumiu.

## Correção

Renderizar o `SiteHeader` nas páginas públicas, mantendo-o fora das telas `/admin/*` e `/login` (que têm seu próprio layout).

### Mudanças

1. `src/routes/index.tsx` — importar `SiteHeader` e renderizar no topo do `<main>`.
2. `src/routes/sobre.tsx` — importar `SiteHeader` e renderizar no topo da página.

(Não vou colocar no `__root.tsx` para evitar que o cabeçalho apareça nas telas administrativas e de login.)

## Resultado

O menu **Início / Sobre** volta a aparecer nas páginas `/` e `/sobre`, com o estilo já definido (borda inferior roxa, logo "AI FOR BUSINESS" e estados ativo/inativo).