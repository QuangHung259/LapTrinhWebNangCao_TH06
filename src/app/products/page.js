"use client";

import { useState, useEffect } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
}));

const products = [
  {
    id: 1,
    name: "iPhone 16",
    price: 1200,
    description:
      "iPhone 16 128GB | Chính hãng VN/A 6.1 inches Apple A18 iOS 18",
    image: "/img/iphone-16-hong.webp",
  },
  {
    id: 2,
    name: "MacBook Pro 16 M4 MAX",
    price: 4000,
    description: "MacBook Pro 16 M4 Max 16CPU 40GPU 64GB 2TB",
    image: "/img/Macbook.webp",
  },
  {
    id: 3,
    name: "Laptop ASUS ROG Flow Z13",
    price: 3000,
    description:
      "Laptop ASUS ROG Flow Z13 GZ302EA-RU080WS 32GB 13.4 inches 2560 x 1600 (WQXGA)",
    image: "/img/Laptop_ASUS.webp",
  },
];

export default function ProductList() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🛒 Danh sách sản phẩm
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Item>
              <img
                src={product.image}
                alt={product.name}
                width="100%"
                style={{ objectFit: "cover" }}
              />
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body1" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6" color="primary">
                ${product.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addToCart(product)}
                sx={{ mt: 1 }}
              >
                Thêm vào giỏ
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                href={`/products/${product.id}`}
                sx={{ mt: 1, ml: 1 }}
              >
                Xem chi tiết
              </Button>
            </Item>
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" mt={3}>
        <Button variant="contained" color="success" href="/cart">
          🛒 Xem giỏ hàng ({cart.length})
        </Button>
      </Box>
    </Box>
  );
}
