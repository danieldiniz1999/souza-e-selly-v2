# Souza & Selly Advocacia (v2)

Landing page institucional de alto padrão desenvolvida para o escritório **Souza & Selly Advocacia**, combinando estética editorial contemporânea (*Dark & Gold*), conformidade estrita com o Código de Ética e Disciplina da OAB, tipografia refinada (*Libre Caslon Text* e *Hanken Grotesk*) e performance ultrarrápida.

---

## 🏛️ Sobre o Escritório

- **Sócias Fundadoras:** Dra. Samara Selly e Dra. Mariana Souza
- **Atuação:** Direito Previdenciário (INSS), Direito Trabalhista e Direito Cível
- **Sede:** Av. Jovita Feitosa, nº 3072, Parquelândia, Fortaleza - CE, CEP 60455-410
- **Horário de Atendimento:** 09:00 às 17:00 (Segunda a Sexta)
- **Abrangência:** Todo o estado do Ceará (capital e interior)

---

## 🚀 Destaques & Funcionalidades

- **Design Editorial Compacto & Equilibrado:** Tipografia e espaçamentos harmônicos, paleta dourada e preta com alto contraste e acessibilidade (WCAG 2.1 AA).
- **Prova Social & Métricas:** Destaque para **8 anos** de história, **+7.000 causas**, **+3.000 famílias** amparadas e **184 municípios** atendidos com contadores numéricos animados.
- **Mapa Interativo do Ceará (SVG Nativo):** Rotas dinâmicas a partir da sede em Fortaleza para as principais cidades do interior (Sobral, Crateús, Quixadá, Limoeiro do Norte, Iguatu e Juazeiro do Norte).
- **Formulário Integrado ao WhatsApp:** Validação em tempo real, máscara de telefone `(85) 90000-0000` e redirecionamento instantâneo com mensagem formatada.
- **Indicador de Horário em Tempo Real:** Verificação automática de expediente comercial baseada no horário de Fortaleza (UTC-3).
- **Slider de Depoimentos & FAQ Interativo:** Componentes acessíveis via teclado e leitores de tela com atributos WAI-ARIA.
- **SEO & Metadados Estruturados:** JSON-LD Schema.org (`LegalService`), Open Graph tags e favicon personalizado.

---

## 📁 Estrutura de Arquivos

```text
souza-e-selly-v2/
├── assets/
│   ├── favicon.svg          # Monograma vetorial dourado S&S
│   ├── dra-samara.jpg       # Retrato institucional Dra. Samara Selly
│   └── dra-mariana.jpg      # Retrato institucional Dra. Mariana Souza
├── css/
│   └── styles.css           # Design system completo e responsivo (Dark & Gold)
├── js/
│   └── main.js              # Mapa SVG, slider, contadores, WhatsApp e validações
├── index.html               # Estrutura semântica principal
├── server.js                # Servidor local Node.js para testes offline
├── vercel.json              # Configurações de deploy, cache e cabeçalhos de segurança na Vercel
├── package.json             # Metadados do projeto
└── README.md
```

---

## 🛠️ Execução Local

Você pode abrir o arquivo `index.html` diretamente em qualquer navegador moderno ou rodar o servidor local incluído:

```bash
# Iniciar o servidor local na porta 3000
node server.js
```

Em seguida, acesse: `http://localhost:3000/`

---

## ⚡ Como Fazer o Deploy na Vercel

### Opção 1: Via Dashboard da Vercel (Recomendado)
1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
2. Clique em **"Add New..."** → **"Project"**.
3. Selecione o repositório **`danieldiniz1999/souza-e-selly-v2`** e clique em **"Import"**.
4. Mantenha as configurações padrão (o arquivo `vercel.json` e `index.html` serão detectados automaticamente).
5. Clique em **"Deploy"**. Seu site estará no ar em poucos segundos com SSL automático e CDN global.

### Opção 2: Via Vercel CLI
```bash
npx vercel
```
Siga as instruções rápidas no terminal e confirme para publicar em produção:
```bash
npx vercel --prod
```
