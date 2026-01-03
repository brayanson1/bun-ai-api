const server = Bun.serve({
    hostname: "0.0.0.0",
    port: Number(process.env.PORT) || 3000,
    fetch(req) {
        return new Response("API de Bun esta funcionando correctamente");
    },
});

console.log(`Servidor corriendo en puerto ${server.port}`);
