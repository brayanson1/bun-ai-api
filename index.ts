const server = Bun.serve({
    port: process.env.PORT ?? 3000,
    async fetch(req) {
        return new Response("API de Bun esta funcionando correctamente");
    },
});
console.log(`Servidor corriendo en ${server.url}: ${server.port}`);