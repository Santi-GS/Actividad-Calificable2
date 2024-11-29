import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const FormComponent = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({ nombre: "", precio: "", categoria: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.precio && formData.categoria) {
      onAddProduct({
        nombre: formData.nombre,
        precio: parseFloat(formData.precio),
        categoria: formData.categoria
      });
      setFormData({ nombre: "", precio: "", categoria: "" });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "20px auto"
      }}
    >
      <TextField
        label="Nombre del Producto"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <TextField
        label="Precio"
        name="precio"
        type="number"
        value={formData.precio}
        onChange={handleChange}
        required
      />
      <TextField
        label="Categoría"
        name="categoria"
        value={formData.categoria}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Agregar Producto
      </Button>
    </Box>
  );
};

export default FormComponent;
