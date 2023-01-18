import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient({
  log: ["query"],
});
//separando a conexao pois fara em varios lugares
