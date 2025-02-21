const modelPost = require('../models/post.models');  // Asegúrate de que el modelo Post esté bien definido

// Función para obtener la lista de posts (solo los no eliminados)
const getList = async () => {
    try {
        // Obtiene todos los posts donde `is_deleted` es 0 (no eliminados)
        const result = await modelPost.findAll({
            where: { is_deleted: 0 }  // Solo se muestran los posts no eliminados
        });

        // Devuelve los datos en un formato limpio
        return result.map(post => post.get({ plain: true }));
    } catch (error) {
        console.error("Error en getList:", error);
        return [];  // Retorna un array vacío en caso de error
    }
};

// Función para crear un nuevo post
const createPost = async (data) => {
    try {
        // Crea un nuevo post en la base de datos
        const newPost = await modelPost.create({
            title: data.title,
            description: data.description,
            post: data.post,  // Cambiado de 'content' a 'post' para coincidir con la tabla
            likes: data.likes || 0, // Si no se proporciona, por defecto 0
            is_deleted: 0  // Se establece como no eliminado al crearlo (si esta columna existe en la BD)
        });

        return {
            status: true,
            message: "✅ Publicación creada con éxito",
            post: newPost
        };
    } catch (error) {
        console.error("❌ Error en createPost:", error);
        return { status: false, message: "Error al crear el post" };
    }
};


// Función para actualizar un post existente
const updatePost = async (data) => {
    try {
        // Busca el post por su ID
        const post = await modelPost.findOne({ where: { pk_post: data.pk_post } });

        if (!post) {
            return { status: false, message: "Post no encontrado" };
        }

        // Actualiza los datos del post
        await post.update({
            title: data.title,
            description: data.description,
            content: data.content
        });

        return { status: true, message: "Post actualizado correctamente" };
    } catch (error) {
        console.error("Error en updatePost:", error);
        return { status: false, message: "Error al actualizar el post" };
    }
};

// Función para eliminar un post (borrado lógico)
const deletePost = async (pk_post) => {
    try {
        // Busca el post por su ID
        const post = await modelPost.findOne({ where: { pk_post } });

        if (!post) {
            return { status: false, message: "Post no encontrado" };
        }

        // En lugar de eliminarlo, cambia el estado de `is_deleted` a 1
        await post.update({ is_deleted: 1 });

        return { status: true, message: "Post marcado como eliminado" };
    } catch (error) {
        console.error("Error en deletePost:", error);
        return { status: false, message: "Error al eliminar el post" };
    }
};

// Exporta las funciones para ser utilizadas en las rutas
module.exports = {
    getList,
    createPost,
    updatePost,
    deletePost
};
