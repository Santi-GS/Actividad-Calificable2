import React, { useState, useEffect } from "react";
import TableComponent from "./components/TableComponent";
import FormComponent from "./components/FormComponent";
import SpinnerComponent from "./components/SpinnerComponent";
import { Box, Typography } from "@mui/material";

const mockData = [
  { id: 1, nombre: "Auriculares Inalámbricos", precio: 120, categoria: "Electrónica" },
  { id: 2, nombre: "Silla de Escritorio", precio: 300, categoria: "Muebles" },
  { id: 3, nombre: "Cafetera Espresso", precio: 250, categoria: "Electrodomésticos" },
  { id: 4, nombre: "Juego de Mesa - Monopoly", precio: 50, categoria: "Juguetes" },
  { id: 5, nombre: "Libro de Programación en JavaScript", precio: 35, categoria: "Libros" }
];

function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProductos(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddProduct = (nuevoProducto) => {
    const ultimoId = productos.length > 0 ? Math.max(...productos.map((p) => p.id)) : 0;
    const productoConId = { ...nuevoProducto, id: ultimoId + 1 };
    setProductos([...productos, productoConId]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        flexDirection: "column",
        padding: 2
      }}
    >
      <Typography variant="h4" gutterBottom>
        Gestión de Productos
      </Typography>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          <TableComponent productos={productos} />
          <FormComponent onAddProduct={handleAddProduct} />
        </>
      )}
    </Box>
  );
}

export default App;
