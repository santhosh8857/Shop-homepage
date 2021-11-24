import React from "react";
import { Button } from "reactstrap";

const Card = (props) => {
  // function which takes the index of the specific product button
  const disableBtn = (index) => {
    let newDisabled = [...props.disableArr];
    newDisabled[index] = true;
    props.setDisableArr([...newDisabled]);
  };

  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Product image--> */}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{props.type.name}</h5>
              {/* Production rating */}
              {props.type.name === "Special Item" ||
              props.type.name === "Popular Item" ? (
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                </div>
              ) : (
                <></>
              )}
              {/* <!-- Product price--> */}
              {props.type.price}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <Button
                // using the disabled attribute of the button
                disabled={props.disableArr[props.index]}
                onClick={() => {
                  props.addCart();
                  disableBtn(props.index);
                }}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
