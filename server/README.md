npm init -y (package.json)
(node src/server.ts vai rodar)
npm i fastiy
npm typescript -D (typescript pra dev)
npm tsc --init (configuracao do typescript, es2020, compilar o typescript)
npm i tsx -D (rodar o codigo sem precisar converter)
(npx tsx src/server.ts {vai rodar} cria um script dev que roda tsx src/server.ts tsx watch src/server.ts pra atualizar quando atualizar o codigo)

ORM prisma
npm i -D prisma
npm i @prisma/client (acessar o prisma na aplicacao quando tiver rodando ou algo assim)
npx prisma init --datasource-provider SQLite (inicia o prisma usando SQLite por criar um arquivo local de bd, nao muda muito com os outros)

Quando mexer no prisma
npx prisma migrate dev (criar a migration quando alterar algo)
npx prisma studio (visualizar o banco de dados)

permitir acesso de um front as informacoes do backend
npm i @fastify/cors

bd n pra n precisa de tabela pivo que guarda os relacionamentos, exemplo habitos e dia, habitos do dia

gerar visual das relacoes
npm i -D prisma-erd-generator @mermaid-js/mermaid-cli

depois do client
generator erd {
provider = "prisma-erd-generator"
}

npx prisma generate

ativar a seed no db
criar o arquivo, alterr pachage.json
npx prisma db seed

ZOD PARA VALIDACAO
npm i zod

dayjs pra trabalhar com datas enquanto nao sai a nova api de datas no typescrypt temporal api
npm i dayjs
