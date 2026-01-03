const server = Bun.serve({
    hostname: "0.0.0.0",
    port: Number(process.env.PORT) || 3000,
    fetch() {
        return new Response("API de Bun funcionando");
    },
});

console.log(`Servidor en puerto ${server.port}`);
