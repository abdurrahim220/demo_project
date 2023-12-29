import React, { useState, useEffect } from "react";
import { CiCalendar } from "react-icons/ci";

const Card = ({ onClick, item }) => {
  const { id, category, title, desc, image, price } = item;
  const [quantity, setQuantity] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("cartData")) || [];

    const savedItem = Array.isArray(savedData)
      ? savedData.find((cartItem) => cartItem.id === id)
      : savedData[id];

    const savedQuantity = savedItem?.quantity || 0;
    setQuantity(savedQuantity);
  }, [id]);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateLocalStorage(quantity - 1);
    }
  };

  const handleIncrease = () => {
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);
    updateLocalStorage(updatedQuantity);
  };

  const updateLocalStorage = (updatedQuantity) => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];

    const itemIndex = Array.isArray(cartData)
      ? cartData.findIndex((cartItem) => cartItem.id === id)
      : id;

    if (itemIndex !== -1) {
      if (Array.isArray(cartData)) {
        cartData[itemIndex].quantity = updatedQuantity;
      } else {
        cartData[id].quantity = updatedQuantity;
      }
    } else {
      cartData.push({ ...item, quantity: updatedQuantity });
    }

    localStorage.setItem("cartData", JSON.stringify(cartData));
  };

  const toggleFlexCol = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`flex ${isActive ? "flex-col" : "flex"} mb-3 gap-10`}>
      <button
        onClick={() => {
          onClick();
          toggleFlexCol();
        }}
        className="flex absolute top-5 left-5 bg-[#f5f2f2cc] items-center border rounded-full px-4 py-2"
      >
        Précisez votre date d’arrivée <CiCalendar />
      </button>
      <img className="rounded-lg w-[649px] h-[324px]" src={image} alt="" />
      <div className="space-y-3 w-[649px] h-[324px] mt-10 lg:mt-0">
        <span className="flex justify-between items-center">
          <h1 className="text-[21px] font-semibold">{category}</h1>
          <p className="text-lg font-normal">{price}$</p>
        </span>
        <h1 className="font-medium text-[18px] leading-[24px]">{title}</h1>
        <p className="text-gray-400">{desc}</p>
        <div className="flex justify-between items-center">
          <span>Quantity</span>
          <div className="flex justify-around items-center gap-2">
            <button
              className="border rounded-full px-10 py-2"
              onClick={() => {
                handleDecrease();
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="border rounded-full px-10 py-2 bg-blue-400"
              onClick={() => {
                handleIncrease();
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
