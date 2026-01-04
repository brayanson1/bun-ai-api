const server = Bun.serve({
    port: process.env.POR ?? 3000,
    async fetch(req) {
        return new Response("API de Bun funcionando correctamente");
    },
});

console.log(`Servidor en puerto ${server.url}:${server.port}`);
