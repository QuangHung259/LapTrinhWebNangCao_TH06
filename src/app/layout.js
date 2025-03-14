export default function Layout({ children }) {
  return (
    <html lang="vi">
      <head>
        <style>
          {`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: Arial, sans-serif;
            }
            body {
              background: #f7f7f7;
              color: #333;
              margin: 0;
              padding: 0;
            }
            nav {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 15px 30px;
              background: #1B2627;
              color: white;
            }
            nav a {
              text-decoration: none;
              color: white;
              font-weight: bold;
              padding: 10px 15px;
              border-radius: 5px;
              transition: background 0.3s ease;
            }
            nav a:hover {
              background: rgba(255, 255, 255, 0.2);
            }
            .cart-button {
            background: #B2F35F;
            font-color: #1F4836
              
              padding: 10px 15px;
              border-radius: 5px;
            }
            .cart-button:hover {
              background: #1F4836;
            }
            main {
              max-width: 1200px;
              margin: 20px auto;
              padding: 20px;
              background: white;
              border-radius: 10px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
          `}
        </style>
      </head>
      <body>
        <nav>
          <a href="/products">Danh sách sản phẩm</a>
          <a href="/cart" className="cart-button">
            🛒 Giỏ hàng
          </a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
