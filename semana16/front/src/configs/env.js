const configs = {
    server: {    
        url: "http://localhost:3000",  // URL del backend (servidor Express)
    },
    routes: {
        posts: {
            list: "/posts/list",   // Ruta para obtener la lista de posts
            create: "/posts/create", // Ruta para crear un nuevo post
            update: "/posts/update", // Ruta para actualizar un post
            delete: "/posts/delete", // Ruta para eliminar un post
        },
    },
};

export default configs;
