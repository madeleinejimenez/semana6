const express = require("express");
const router = express.Router();
const sequelize = require("../database/connect");
const Post = require("../models/post.models")(sequelize);

// 🔹 Obtener todos los posts
router.post("/createPost", async (req, res) => {
    try {
        const { post, title, description, likes, image } = req.body;

        if (!post || !title || !description || !image) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const newPost = await Post.create({
            post,
            title,
            description,
            likes: likes || 0,
            image
        });

        res.status(201).json({
            message: "Publicación creada con éxito",
            post: newPost
        });

    } catch (error) {
        console.error(" Error en createPost:", error);
        res.status(500).json({ message: "Error al crear el post" });
    }
});

module.exports = router;
