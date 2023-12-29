import React, { useState, useEffect } from "react";

const ProductContainer = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedCart = JSON.parse(localStorage.getItem("cartData")) || [];
      setCart(storedCart);
    };

    window.addEventListener("storage", handleStorageChange);

    handleStorageChange();

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleIncrease = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  const handleDecrease = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Math.max(0, updatedCart[index].quantity - 1);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal;

  return (
    <div>
      {cart.map((item, index) => (
        <div key={index} className="flex gap-3">
          <div className="flex gap-1 items-center">
            <button onClick={() => handleIncrease(index)}>+</button>
            <p>{item.quantity}</p>
            <button onClick={() => handleDecrease(index)}>-</button>
          </div>

          <p>{item.title}</p>
          <p>{(item.price * item.quantity).toFixed(2)}$</p>
        </div>
      ))}

      <hr className="mt-3 mb-3" />

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p>Subtotal:</p> <p>{subtotal.toFixed(2)}$</p>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <p>Total:</p> <p>{total.toFixed(2)}$</p>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
