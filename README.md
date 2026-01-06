# 📸 Galeria de Fotos

Aplicação web desenvolvida para o processo seletivo da Aceleradora Ágil - Desafio 02.

## 📋 Sobre o Projeto

Uma galeria de fotos interativa que permite visualizar, pesquisar e filtrar imagens em tempo real. A aplicação integra-se com a API Unsplash para exibir fotos profissionais de alta qualidade, com modal para visualização ampliada e design moderno com gradientes animados.

## ✨ Funcionalidades

- ✅ **Visualização de Fotos**: Exibe 20 fotos em layout grid responsivo
- ✅ **Busca em Tempo Real**: Filtragem instantânea de fotos por nome
- ✅ **Modal de Foto**: Clique em qualquer foto para visualizar em tamanho maior
- ✅ **Efeitos Hover**: Animações interativas ao passar o mouse sobre as fotos
- ✅ **Design Responsivo**: Adaptável para desktop, tablet e mobile
- ✅ **Interface Moderna**: Design com gradientes animados, glass morphism e sombras
- ✅ **Feedback Visual**: Mensagens de loading e "nenhuma foto encontrada"
- ✅ **Integração Unsplash**: Fotos profissionais de alta qualidade

## 🚀 Tecnologias Utilizadas

- **React** 18.3+ - Biblioteca JavaScript para construção de interfaces
- **Vite** 7.2+ - Build tool e dev server ultrarrápido
- **Unsplash API** - API para fotos profissionais de alta qualidade (ativa)
- **Lorem Picsum API** - API alternativa para fotos (fallback)
- **CSS3** - Estilização com Flexbox, Grid, animações e glass morphism
- **JavaScript (ES6+)** - Lógica da aplicação

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
```bash
git clone git@github.com:SamiraCavalcanti/Galerria-de-Fotos.git
cd Galerria-de-Fotos
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 🏗️ Build para Produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

Para testar o build de produção localmente:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
galeria-de-fotos/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Cabeçalho da aplicação
│   │   ├── Header.css
│   │   ├── SearchBar.jsx        # Barra de busca com ícone
│   │   ├── SearchBar.css
│   │   ├── PhotoGrid.jsx        # Grid de fotos
│   │   ├── PhotoGrid.css
│   │   ├── PhotoCard.jsx        # Card individual de foto
│   │   ├── PhotoCard.css
│   │   ├── PhotoModal.jsx       # Modal para visualização ampliada
│   │   ├── PhotoModal.css
│   │   ├── Footer.jsx           # Rodapé
│   │   └── Footer.css
│   ├── App.jsx                  # Componente principal
│   ├── App.css                  # Estilos globais
│   ├── config.js                # Configuração da API
│   ├── index.css                # Reset CSS
│   └── main.jsx                 # Ponto de entrada
├── package.json
└── README.md
```

## 🎨 Características de Design

- **Paleta de Cores**: Gradiente animado pastel (lavanda, azul céu, rosa, azul claro)
- **Tipografia**: Segoe UI, fonte moderna e legível
- **Glass Morphism**: Efeito de vidro fosco em header e cards
- **Gradiente Animado**: Fundo com movimento suave e contínuo
- **Responsividade**: Breakpoints em 1024px, 768px e 480px
- **Animações**: Transform, scale, shadow effects e fade in/out
- **Grid Adaptativo**: Auto-fill com minmax para responsividade
- **Modal Interativo**: Visualização ampliada com backdrop blur

## 🔍 API Utilizada

**API Principal: Unsplash** - https://unsplash.com ✨
- Fotos profissionais de altíssima qualidade
- 20 imagens curadas e únicas
- **Atualmente ATIVA** no projeto
- Fallback automático para Lorem Picsum se necessário

**API Alternativa: Lorem Picsum** - https://picsum.photos
- Fotos selecionadas por IDs específicos
- Backup automático caso Unsplash não esteja disponível
- Gratuita e sem necessidade de autenticação

### Configuração da API:

A aplicação já está configurada com Unsplash ativa. Para modificar, edite o arquivo `src/config.js`:

```javascript
// Unsplash ativa:
export const UNSPLASH_ACCESS_KEY = 'SUA_KEY_AQUI';

// Voltar para Lorem Picsum:
export const UNSPLASH_ACCESS_KEY = null;
```

## 👩‍💻 Desenvolvido por

Samira - Processo Seletivo Aceleradora Ágil 2026/1

## 📄 Licença

© 2026 Galeria de Fotos. Todos os direitos reservados.

---

**Instrutor/Avaliador**: Para testar a funcionalidade de busca, digite nomes de autores na barra de pesquisa. A filtragem acontece em tempo real! Clique em qualquer foto para visualizar em tamanho maior no modal interativo.


