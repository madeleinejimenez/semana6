export const fetchPosts = async () => {
    try {
        const response = await fetch("http://localhost:3000/posts");  // Verifica que la URL esté correcta
        if (!response.ok) throw new Error("No se pudieron obtener los posts");

        return await response.json();
    } catch (error) {
        console.error("❌ Error al obtener los posts:", error);
        return [];
    }
};
