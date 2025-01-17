import React, { useState, useEffect } from "react";
import { getAutos, createAuto, updateAuto, deleteAuto } from "../services/autosService";
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const ManageAutos = () => {
  const [autos, setAutos] = useState([]);
  const [formData, setFormData] = useState({
    brand: "",
    npassengers: "",
    color: "",
    nengine: "",
    model: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchAutos();
  }, []);

  const fetchAutos = async () => {
    const data = await getAutos();
    setAutos(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateAuto(editingId, formData);
      setIsEditing(false);
      setEditingId(null);
    } else {
      await createAuto(formData);
    }
    setFormData({ brand: "", npassengers: "", color: "", nengine: "", model: "" });
    fetchAutos();
  };

  const handleEdit = (auto) => {
    setFormData(auto);
    setIsEditing(true);
    setEditingId(auto.id);
  };

  const handleDelete = async (id) => {
    await deleteAuto(id);
    fetchAutos();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Gestión de Autos</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <TextField
          label="Marca"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Pasajeros"
          name="npassengers"
          type="number"
          value={formData.npassengers}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Motor"
          name="nengine"
          value={formData.nengine}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Modelo"
          name="model"
          value={formData.model}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <Button variant="outlined" color="primary" type="submit">
          {isEditing ? "Actualizar" : "Registrar"}
        </Button>
      </form>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Marca</TableCell>
              <TableCell>Pasajeros</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Motor</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {autos.map((auto) => (
              <TableRow key={auto.id}>
                <TableCell>{auto.brand}</TableCell>
                <TableCell>{auto.npassengers}</TableCell>
                <TableCell>{auto.color}</TableCell>
                <TableCell>{auto.nengine}</TableCell>
                <TableCell>{auto.model}</TableCell>
                <TableCell>
                  <Button variant="contained" color="warning" onClick={() => handleEdit(auto)}>
                    Editar
                  </Button>
                  <Button variant="contained" color="error" onClick={() => handleDelete(auto.id)}>
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageAutos;