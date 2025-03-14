"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

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

export default function ProductDetail() {
  const { id } = useParams();
  const [cart, setCart] = useState([]);

  const product = products.find((p) => p.id.toString() === id);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = () => {
    if (!product) return;

    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (!product) return <h1>Sản phẩm không tồn tại</h1>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <img
        src={product.image}
        alt={product.name}
        width="300"
        style={{ borderRadius: "10px" }}
      />
      <h1>{product.name}</h1>
      <br></br>
      <p style={{ fontSize: "18px", fontWeight: "bold", color: "#0070f3" }}>
        ${product.price}
      </p>
      <br></br>
      <p>{product.description}</p>
      <br></br>
      <button
        onClick={addToCart}
        style={{
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          marginRight: "10px",
        }}
      >
        🛒 Thêm vào giỏ
      </button>
      <a
        href="/products"
        style={{
          padding: "10px 20px",
          background: "#0070f3",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        ⬅ Quay lại
      </a>
    </div>
  );
}
