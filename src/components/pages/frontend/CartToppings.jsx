import { Minus, Plus } from "lucide-react";
import React from "react";

const CartToppings = ({ toppingsCart, setToppingsCart }) => {
  const handleAddItem = (item) => {
    const exist = toppingsCart.find(
      (cart) => cart.toppings_aid === item.toppings_aid
    );

    if (exist !== undefined) {
      setToppingsCart(
        toppingsCart.map((cart) =>
          cart.toppings_aid === item.toppings_aid
            ? { ...exist, quantity: exist.quantity + 1 }
            : cart
        )
      );
    } else {
      setToppingsCart([...toppingsCart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (item) => {
    const exist = toppingsCart.find(
      (cart) => cart.toppings_aid === item.toppings_aid
    );
    if (exist.quantity === 1) {
      setToppingsCart(
        toppingsCart.filter((cart) => cart.toppings_aid !== item.toppings_aid)
      );
    } else {
      setToppingsCart(
        toppingsCart.map((cart) =>
          cart.toppings_aid === item.toppings_aid
            ? { ...exist, quantity: exist.quantity - 1 }
            : cart
        )
      );
    }
  };

  return (
    <>
      {toppingsCart.map((item, key) => (
        <div
          className="card-item  items-center mb-2 pb-2 border-b border-gray-100"
          key={key}
        >
          <div className=" flex justify-between w-full items-center">
            <div>
              <h6 className=" text-[clamp(12px,_6vw,_14px)] text-black">
                {item.toppings_title}
              </h6>
              <p className="text-light">
                <span className="text-xs pr-0.5 font-normal ">PHP</span>
                {item.toppings_price}
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

export default CartToppings;
