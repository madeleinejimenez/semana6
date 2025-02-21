const { Sequelize } = require('sequelize');

// Configura la conexión con la base de datos
const sequelize = new Sequelize('semana16', 'root', 'made', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Puedes cambiarlo a `console.log` para depuración si es necesario
});

(async () => {
    try {
      await sequelize.authenticate();
      console.log("✅ Conexión a la base de datos exitosa.");
      await sequelize.sync(); // Asegura que la tabla existe
      console.log("✅ Base de datos sincronizada.");
    } catch (error) {
      console.error("❌ Error al conectar con la base de datos:", error);
      process.exit(1);
    }
  })();
  
  module.exports = sequelize;
