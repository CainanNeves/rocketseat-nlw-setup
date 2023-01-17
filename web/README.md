Vai usar o vitejs, um template com algumas coisas prontas que front end precisa.
Suporte para typescript e jsx

npm create vite@latest (pra criar a pasta com o projeto)
npm i pra baixar dependencias que ja vem no projeto

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

postcss.config.js
module.exports = {
plugins: {
tailwindcss: {},
autoprefixer: {},
}
}

tailwind.config.js

Content
'./src/\*_/_.tsx',
'./index.html'

Main css(styles/global.css)

@tailwind base;
@tailwind components;
@tailwind utilities;
