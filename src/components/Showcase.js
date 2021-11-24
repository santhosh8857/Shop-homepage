import React, { useState } from "react";
import Card from "./Card";

const Showcase = (props) => {
  // product details
  let fancyProduct = {
    name: "Fancy Product",
    price: "$40.00 - $80.00",
  };
  let specialItem = {
    name: "Special Item",
    price: "$18.00",
  };
  let saleItem = {
    name: "Sale Item",
    price: "$25.00",
  };
  let popularItem = {
    name: "Popular Item",
    price: "$40.00",
  };

  // Array to track the disable status
  const [disableArr, setDisableArr] = useState(new Array(8).fill(false));

  return (
    <>
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* Card Component */}
            <Card
              type={fancyProduct}
              addCart={props.addCart}
              disableArr={disableArr}
              setDisableArr={setDisableArr}
              index={1}
            />
            <Card
              type={specialItem}
              addCart={props.addCart}
              disableArr={disableArr}
              setDisableArr={setDisableArr}
              index={2}
            />
            <Card
              type={saleItem}
              addCart={props.addCart}
              disableArr={disableArr}
              setDisableArr={setDisableArr}
              index={3}
            />
            <Card
              type={popularItem}
              addCart={props.addCart}
              disableArr={disableArr}
              setDisableArr={setDisableArr}
              index={4}
            />
            <Card
              type={saleItem}
              addCart={props.addCart}
              disableArr={disableArr}
              setDisableArr={setDisableArr}
              index={5}
            />
            <Card
              type={fancyProduct}
              addCart={props.addCart}
              disableArr={disableArr}
              setDisableArr={setDisableArr}
              index={6}
            />
            <Card
              type={specialItem}
              addCart={props.addCart}
              disableArr={disableArr}
              setDisableArr={setDisableArr}
              index={7}
            />
            <Card
              type={popularItem}
              addCart={props.addCart}
              disableArr={disableArr}
              setDisableArr={setDisableArr}
              index={8}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
