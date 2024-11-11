import useQueryData from "@/components/custom-hook/useQueryData";
import { imgPath } from "@/components/helpers/functions-general.jsx";
import { setMessage, setSuccess } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { Plus } from "lucide-react";
import React from "react";
import SpinnerMenu from "../backend/partials/spinners/SpinnerMenu";
import ToastSuccess from "../backend/partials/ToastSuccess";

const Menu = ({ ramenCart, setRamenCart, setShowToppings }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v2/ramen`, // endpoint
    "get", // method
    "ramen"
  );
  const handleAddRamen = (item) => {
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
    setShowToppings(true)
    dispatch(setSuccess(true));
    dispatch(setMessage("Added to Cart!"));
  };

  return (
    <>
      <section className="py-24 bg-orange bg-[url('./public/img/pattern.webp')] bg-repeat bg-center bg-blend-color-burn bg-opacity-100">
        <div className="container">
          <h2 className="text-center uppercase text-white ">Ramen Menu</h2>
          {isLoading && (
            <div className="min-h-[400px] w-full relative">
              <SpinnerMenu />
            </div>
          )}
          <div className="grid grid-cols-2 gap-10 mt-14">
            {!isLoading &&
              result?.data.map((item, key) => {
                return (
                  <div className="grid-item mb-6" key={key}>
                    <div className="grid grid-cols-[250px_1fr] gap-2 items-center">
                      <div>
                        <h3 className="mb-2">{item.ramen_title}</h3>
                        <h4 className="mb-5 text-nowrap">
                          {item.ramen_category}
                        </h4>
                        <h4 className="text-accent">PHP {item.ramen_price}</h4>

                        <p>{item.ramen_description}</p>
                        <button
                          className="btn btn-accent"
                          onClick={() => handleAddRamen(item)}
                        >
                          <Plus size={18} /> Add to Cart
                        </button>
                      </div>
                      <img
                        src={`${imgPath}/${item.ramen_photo}`}
                        alt=""
                        className="size-[300px] rounded-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      {store.success && <ToastSuccess/>}

    </>
  );
};

export default Menu;
