import React, { useState } from "react";
import Card from "../../components/Cards/Card";
import Pcard from "../../components/paymentCard/Pcard";
import data from "../../../public/fakedb";

const HomePages = () => {
  const [showPcard, setShowPcard] = useState(false);

  const handleCardClick = () => {
    setShowPcard(!showPcard);
  };

  const [cart,setCart]=useState()


  return (
    <div className="max-w-7xl mx-auto my-10 px-5 lg:px-2">
      <div>
        <h1 className="font-bold text-2xl">
          Lorem ipsum dolor sit amet rahim.
        </h1>
        <p className="text-gray-500 mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sit
          debitis recusandae nisi ipsa, officia illo ab, natus voluptatum
          ducimus earum, sapiente molestiae facere unde?
        </p>
      </div>

      <div className="space-y-2 ">
        <h1>Extras disponibles</h1>

        <div className="flex gap-10">
          <div className="relative">
            {data.map((item) => (
              <Card onClick={handleCardClick} item={item} key={item._id} />
            ))}
          </div>

          {showPcard && (
            <div>
              <Pcard cart={cart} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePages;
