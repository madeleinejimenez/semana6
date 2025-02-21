import React, { useState, useEffect } from "react";
import { fetchPosts } from "../services/service";
import "./ListPost.css";

const ListPost = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPosts()
            .then((data) => {
                if (Array.isArray(data) && data.length > 0) {
                    setPosts(data);
                } else {
                    setError("No se encontraron publicaciones.");
                }
            })
            .catch((err) => setError("Error al cargar los posts"));
    }, []);

    return (
        <div className="list-post-container">
            <h1>Lista de Publicaciones</h1>
            {error && <p className="error-message">{error}</p>}

            <div className="posts-grid">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div className="post-card" key={post.id}>
                            <img
                                src={post.image}
                                alt={post.title}
                                className="post-image"
                                onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
                            />
                            <div className="post-content">
                                <h3>{post.title}</h3>
                                <p><strong>Descripción:</strong> {post.description}</p>
                                <p className="likes">❤️ Likes: {post.likes}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-posts-message"></p>
                )}
            </div>
        </div>
    );
};

export default ListPost;
