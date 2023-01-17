//Back-end API RESTful
//fastify no lugar do express

import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

/**
 * Metodos HTTP: Get, Post, Put, Patch, Delete
 * Get: Pegar informacoes (So o que da pra fazer pelos navegadores)
 * Post: Criar informacoes
 * Put: Atualizar informacao completamente
 * Patch: Pequenas atualizacoes na informacao?
 * Delete: Deletar recurso no backend
 */

app.get("/", async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server running");
  });
