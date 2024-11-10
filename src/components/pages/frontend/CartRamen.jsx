import { Minus, Plus } from "lucide-react";
import React from "react";

const CartRamen = ({ ramenCart, setRamenCart }) => {
  const handleAddItem = (item) => {
    const exist = ramenCart.find((cart) => cart.ramen_aid === item.ramen_aid);

    if (exist !== undefined) {
      setRamenCart(
        ramenCart.map((cart) =>
          cart.ramen_aid === item.ramen_aid
            ? { ...exist, quantity: exist.quantity + 1 }
            : cart
        )
      );
    } else {
      setRamenCart([...ramenCart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (item) => {
    const exist = ramenCart.find((cart) => cart.ramen_aid === item.ramen_aid);
    if (exist.quantity === 1) {
      setRamenCart(
        ramenCart.filter((cart) => cart.ramen_aid !== item.ramen_aid)
      );
    } else {
      setRamenCart(
        ramenCart.map((cart) =>
          cart.ramen_aid === item.ramen_aid
            ? { ...exist, quantity: exist.quantity - 1 }
            : cart
        )
      );
    }
  };

  return (
    <>
      {ramenCart.map((item, key) => (
        <div
          className="card-item  items-center mb-2 pb-2 border-b border-gray-100"
          key={key}
        >
          <div className=" flex justify-between w-full items-center">
            <div>
              <h6 className=" text-[clamp(12px,_6vw,_14px)] text-black">
                {item.ramen_title}
              </h6>
              <p className="text-light">
                <span className="text-xs pr-0.5 font-normal ">PHP</span>
                {item.ramen_price}
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

export default CartRamen;
