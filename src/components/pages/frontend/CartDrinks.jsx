import { Minus, Plus } from "lucide-react";
import React from "react";

const CartDrinks = ({ drinksCart, setDrinksCart }) => {
  const handleAddItem = (item) => {
    const exist = drinksCart.find(
      (cart) => cart.drinks_aid === item.drinks_aid
    );

    if (exist !== undefined) {
      setDrinksCart(
        drinksCart.map((cart) =>
          cart.drinks_aid === item.drinks_aid
            ? { ...exist, quantity: exist.quantity + 1 }
            : cart
        )
      );
    } else {
      setDrinksCart([...drinksCart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (item) => {
    const exist = drinksCart.find(
      (cart) => cart.drinks_aid === item.drinks_aid
    );
    if (exist.quantity === 1) {
      setDrinksCart(
        drinksCart.filter((cart) => cart.drinks_aid !== item.drinks_aid)
      );
    } else {
      setDrinksCart(
        drinksCart.map((cart) =>
          cart.drinks_aid === item.drinks_aid
            ? { ...exist, quantity: exist.quantity - 1 }
            : cart
        )
      );
    }
  };

  return (
    <>
    <p>drinks</p>
      {drinksCart.map((item, key) => (
        <div
          className="card-item  items-center mb-2 pb-2 border-b border-gray-100"
          key={key}
        >
          <div className=" flex justify-between w-full items-center">
            <div>
              <h6 className=" text-[clamp(12px,_6vw,_14px)] text-black">
                {item.drinks_title}
              </h6>
              <p className="text-light">
                <span className="text-xs pr-0.5 font-normal ">PHP</span>
                {item.drinks_price}
              </p>
            </div>
            <div className="">
              <ul className="flex gap-3 items-center">
                <li className="size-[25px] bg-accent grid place-content-center rounded-full ">
                  <button onClick={() => handleAddItem(item)}>
                    <Plus stroke="#fff" size={15} />
                  </button>
                </li>
                <li className="text-base font-bold">{item.quantity}</li>
                <li className="size-[25px] bg-accent grid place-content-center rounded-full ">
                  <button onClick={() => handleRemoveItem(item)}>
                    <Minus stroke="#fff" size={15} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartDrinks;
