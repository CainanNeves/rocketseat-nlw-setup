//Back-end API RESTful
//fastify no lugar do express

import cors from "@fastify/cors";
import Fastify from "fastify";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);
/**
 * Metodos HTTP: Get, Post, Put, Patch, Delete
 * Get: Pegar informacoes (So o que da pra fazer pelos navegadores)
 * Post: Criar informacoes
 * Put: Atualizar informacao completamente
 * Patch: Pequenas atualizacoes na informacao?
 * Delete: Deletar recurso no backend
 */

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server running");
  });
