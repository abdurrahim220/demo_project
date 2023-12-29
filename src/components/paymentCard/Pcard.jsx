import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ProductContainer from "../productContainer/ProductContainer";
import VisaCard from "../visaCard/VisaCard";

const Pcard = ({ cart }) => {
  // console.log(cart)
  return (
    <div className=" space-y-5 lg:w-[454px]">
      <div className="border space-y-2 p-5 rounded-lg">
        <h1>TOPDESTINATION-ALBERT EXTRA</h1>
        <p>Saisissez votre date d'arrivée </p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker format="DD MMMM YYYY" />
        </LocalizationProvider>
      </div>

      <div className="border space-y-2 p-5 rounded-lg">
        <h1>Panier</h1>

        <div>
          <ProductContainer cart={cart} />
        </div>
      </div>
      <div className="border space-y-2 p-5 rounded-lg">
        <VisaCard/>
      </div>

    </div>
  );
};

export default Pcard;
