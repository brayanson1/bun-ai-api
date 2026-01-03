const port = Number(process.env.PORT || 3000);

const server = Bun.serve({
    port,
    fetch(req) {
        return new Response("API de Bun está funcionando correctamente");
    },
});

console.log(`Servidor corriendo en http://localhost:${port}`);
