import React from "react";
import Product from "../components/Product";
import { products } from "../constants";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" fontWeight={"bold"}>
        Products
      </Typography>

      <Box sx={{ display: "flex", marginTop: 3, gap: "20px" }}>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </Box>
    </Box>
  );
}
