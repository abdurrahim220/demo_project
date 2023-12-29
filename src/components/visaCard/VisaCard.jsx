import React, { useState } from "react";
import { IoBagHandle } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";
const VisaCard = () => {
    const [isOpen, setIsOpen] = useState(false);

  const openBelow = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="text-gray-400">
      <div className="mb-4">
        <label className="flex flex-col">
          Nam complet
          <input
            type="text"
            className="border px-2 py3 rounded-md"
            placeholder="Ex Jean Dupont"
          />
        </label>
        <label className="flex flex-col">
          Email
          <input
            type="text"
            className="border px-2 py3 rounded-md"
            placeholder="example@mail.com"
          />
        </label>
      </div>

      <hr />

      <div className="flex justify-center items-center my-3 text-blue-400 gap-2" onClick={openBelow}>
        <IoBagHandle />
        <span>Paiment Sécurisé en un clic avec link</span>
        <FaArrowDown />
      </div>

      {isOpen && (
        <div className="mt-2">
          <label className="flex flex-col">
            Numéro de carte
            <input
              type="text"
              className="border px-2 py-3 rounded-md"
              placeholder="1234 1234 1234 1234"
            />
          </label>
          <div className="space-y-2">
            <label className="flex flex-col">
              Date d’expiration
              <input
                type="text"
                className="border px-2 py-3 rounded-md"
                placeholder="MM/AA"
              />
            </label>
            <label className="flex flex-col">
              CVC
              <input
                type="text"
                className="border px-2 py-3 rounded-md"
                placeholder="CVC"
              />
            </label>
          </div>
          <span className="flex justify-center items-center my-2">
          <button className="px-5 py-2 bg-blue-500 text-white rounded-md">Valider le panier</button>
          </span>
        </div>
      )}
    </div>
  );
};

export default VisaCard;
