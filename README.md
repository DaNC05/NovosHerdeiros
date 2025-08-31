# Novos Herdeiros — Site Institucional

Site estático (HTML/CSS/JS) da ONG **Novos Herdeiros**. Responsivo e acessível.

![preview](./img/log.png)

> **Demo:** https://DaNC05.github.io/novos-herdeiros-site/

---

## ✨ Recursos

- **Responsivo** (mobile‑first) com _media queries_ organizadas: `1200px`, `900px`, `640px`, `480px`.
- **Tipografia e espaçamentos fluidos** com `clamp()` e unidades relativas.
- **Navbar fixa** com leve blur + **realce automático** do link ativo via `IntersectionObserver`.
- **Scroll suave** nativo (`scroll-behavior: smooth`) com **fallback** em JS (Safari antigo).
- **Grid de cards fluido** (`repeat(auto-fit, minmax(...))`) — adapta de 1 a N colunas.
- **Acessibilidade**: foco visível, `prefers-reduced-motion`, `alt` nas imagens e links claros.
- **Contato prático**: link `mailto:` + botão **Copiar e-mail** e **WhatsApp** com mensagem pronta.
- **SEO básico**: `<meta name="description">` e **JSON-LD** (`@type: NGO`) com endereço e redes.
- **Imagens** com `loading="lazy"` onde faz sentido.

---

## 🗂 Estrutura

```
.
├── index.html
├── styles.css        # estilos principais (media queries organizadas)
├── layouts.css       # componentes/base (sem conflito de background)
├── variaveis.css     # paleta, tipografia, espaços, sombras etc.
├── script.js         # copiar e-mail, link ativo, fallback smooth scroll
└── img/              # imagens e ícones
```

---

## 🚀 Como rodar localmente

```bash
# 1) Baixe/clonando
git clone https://github.com/DaNC05/novos-herdeiros-site.git
cd novos-herdeiros-site

# 2) Abra no navegador
#   a) Clique em index.html
#   b) ou use uma extensão "Live Server" no VS Code
```

> Não há build: é só abrir o `index.html`.

---

## 🧩 Personalização rápida

- **Logo/tamanho:** só via CSS (`.nav__brand img { height: clamp(28px, 4.5vw, 40px); }`).
- **Cores:** altere em `variaveis.css` (`--brand-*`, `--gray-*`).
- **Redes sociais & contato:** `index.html` → `#contato` (`mailto:`, `wa.me`, Instagram).
- **Endereço/Mapa:** ajuste o texto e a URL do `Google Maps`.
- **SEO:** mude `<title>`, `<meta name="description">` e os campos do **JSON-LD**.
- **Cards/Projetos:** adicione/remova `<article class="card">` em `#projetos`.

---

## 📱 Responsividade (resumo)

- **Breakpoints:** `1200px`, `900px`, `640px`, `480px`.
- **Hero** troca para 1 coluna `<= 900px`; imagem reduz em `<= 640px` e `<= 480px`.
- **Grid** usa `auto-fit/minmax(260px, 1fr)` — *quase não precisa* de breakpoint manual.
- **Âncoras** compensam a navbar: `scroll-margin-top: calc(var(--nav-h) + 16px);`
- **Navbar** diminui no mobile (`--nav-h: 64px → 56px`).

---

## 📄 Licença

Este projeto está sob **MIT License**. Sinta‑se à vontade para usar e adaptar.  
(Se preferir outra licença, substitua este bloco.)

---

## 📬 Contato

- **ONG Novos Herdeiros** — `novosherdeiros@gmail.com`  
- Instagram: **@ong.novosherdeiros**  
- Endereço: Rua Mário Grazini, 100 — Vila Santo Estefano — CEP 04153‑150

---

> Dúvidas ou sugestões? Abra uma _issue_! :sparkles:
