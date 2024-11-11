import { imgPath } from "@/components/helpers/functions-general";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { Minus, Plus, ShoppingBasket, Trash2, X } from "lucide-react";
import React from "react";
import CartRamen from "./CartRamen";
import CartDrinks from "./CartDrinks";
import CartDessert from "./CartDessert";
import CartToppings from "./CartToppings";
import { InputSelect, InputText } from "@/components/helpers/formInputs";
import { Formik, Form } from "formik";
import * as Yup from "Yup";
import useQueryData from "@/components/custom-hook/useQueryData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";

const Cart = ({
  ramenCart,
  setRamenCart,
  dessertCart,
  setDessertCart,
  drinksCart,
  setDrinksCart,
  toppingsCart,
  setToppingsCart,
  setTotals,
  totals,
}) => {
  const { dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));
  const [change, setChange] = React.useState(0);
  const queryClient = useQueryClient();

  const {
    isLoading,
    isFetching,
    error,
    data: mop,
  } = useQueryData(
    "/v2/mop", // endpoint
    "get", // method
    "mop" // key
  );

  const mutation = useMutation({
    mutationFn: (values) => queryData("/v2/transaction", "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["transaction"] });

      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(setMessage("New Transaction Record Added"));

        dispatch(setIsAdd(false));
      }
    },
  });

  const handleClearCart = () => {
    setRamenCart([]);
    setToppingsCart([]);
    setDessertCart([]);
    setDrinksCart([]);
  };

  

  const handleComputeChange = (e) => {
    setChange(e.target.value - (getSubTotal + getSubTotal * 0.02));
  };

  React.useEffect(() => {
    setTotals((prev) => ({
      ...prev,
      ramen: ramenCart.reduce((a, c) => a + c.quantity * c.ramen_price, 0),
      toppings: toppingsCart.reduce(
        (a, c) => a + c.quantity * c.toppings_price,
        0
      ),
      dessert: drinksCart.reduce((a, c) => a + c.quantity * c.drinks_price, 0),
      drinks: dessertCart.reduce(
        (a, c) => a + c.quantity * c.sidesdessert_price,
        0
      ),
    }));
  }, [ramenCart, dessertCart, drinksCart, toppingsCart]);

  let getSubTotal =
    totals.ramen + totals.toppings + totals.dessert + totals.drinks;

  const initVal = {
    transaction_aid: "",
    transaction_payment: "",
    transaction_mop: "",
  };

  const yupSchema = Yup.object({
    transaction_payment: Yup.string().required("Required"),
    transaction_mop: Yup.string().required("Required"),
  });

  return (
    <div className="w-[300px] h-screen fixed top-0 right-0 bg-white text-black z-50 grid grid-rows-[auto,_1fr,_auto] shadow-[rgba(17,_0,_26,_0.1)_0px_0px_16px] animate-slideLeft">
      <div className="cart-header p-3 flex justify-between mb-2 border-b border-gray-200">
        <h5 className="mb-0 text-black leading-tight">Your Cart</h5>

        <button onClick={handleClose}>
          <X />
        </button>
      </div>

      <div className="cart-body px-2 h-[62vh] overflow-auto">
        {(ramenCart.length > 0 ||
          dessertCart.length > 0 ||
          drinksCart.length > 0 ||
          toppingsCart.length > 0) && (
          <button
            className="flex justify-end mb-5 w-full"
            onClick={handleClearCart}
          >
            <Trash2 />
          </button>
        )}

        {ramenCart.length === 0 &&
          dessertCart.length === 0 &&
          drinksCart.length === 0 &&
          toppingsCart.length === 0 && (
            <div className="size-[200px] mx-auto text-center flex flex-col justify-center items-center opacity-30">
              <ShoppingBasket size={100} className="mb-5" strokeWidth={1} />
              <h4>Cart is Empty</h4>
            </div>
          )}

        <CartRamen ramenCart={ramenCart} setRamenCart={setRamenCart} />
        <CartToppings
          toppingsCart={toppingsCart}
          setToppingsCart={setToppingsCart}
        />
        <CartDessert
          dessertCart={dessertCart}
          setDessertCart={setDessertCart}
        />
        <CartDrinks drinksCart={drinksCart} setDrinksCart={setDrinksCart} />
      </div>

      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate({
            ...values,
            transaction_cart_ramen: ramenCart,
            transaction_cart_toppings: toppingsCart,
            transaction_cart_dessertCart: dessertCart,
            transaction_cart_drinks: drinksCart,
            transaction_subtotal: Number(getSubTotal),
            transaction_finaltotal:
              Number(getSubTotal) + Number(getSubTotal) * 0.02,

            transaction_change: change,
          });
        }}
      >
        {({ values }) => {
          return (
            <Form className="mb-5">
              <div className="cart-summary p-2 ">
                <h5 className="mb-3 pb-2 ">Summary</h5>
                <ul className="flex justify-between items-center mb-1 text-xs space-y-2">
                  <li className=" ">Subtotal</li>
                  <li>
                    <span className="pr-1">PHP</span>
                    {Math.round(getSubTotal).toFixed(2)}
                  </li>
                </ul>
                <ul className="flex justify-between items-center mb-1 text-xs space-y-2">
                  <li className=" ">Service Fee</li>
                  <li>
                    <span className="pr-1">PHP</span>
                    {Math.round(getSubTotal * 0.02).toFixed(2)}
                  </li>
                </ul>

                <ul className="flex justify-between items-center mb-2 text-xs space-y-2 ">
                  <li className="">Total </li>

                  <li>
                    <span className="pr-1">PHP</span>
                    {(
                      Number(getSubTotal) +
                      Math.round(Number(getSubTotal) * 0.02)
                    ).toFixed(2)}
                  </li>
                </ul>

                <div className="input-wrap  flex items-center justify-between [&>input]:basis-[70px] mb-2">
                  <InputText
                    label="Payment"
                    type="text"
                    name="transaction_payment"
                    // disabled={mutation.isPending}
                    onChange={(e) => handleComputeChange(e)}
                  />
                </div>

                <div className="input-wrap  flex items-center justify-between [&>select]:basis-[70px] ">
                  <InputSelect
                    label="MOP"
                    name="transaction_mop"
                    // disabled={mutation.isLoading}
                  >
                    <optgroup label="Select MOP">
                      <option value="" hidden></option>
                      {!isLoading && mop?.data.length > 0 ? (
                        mop?.data.map((item, key) => (
                          <option key={key} value={item.mop_title}>
                            {item.mop_title}
                          </option>
                        ))
                      ) : (
                        <option value="">No data</option>
                      )}
                    </optgroup>
                  </InputSelect>
                </div>

                <ul className="flex justify-between items-center   mb-5 text-xs space-y-2">
                  <li className=" ">Change</li>
                  <li>
                    <span className="pr-1">PHP</span>
                    {Number(getSubTotal) > 0 ? Math.floor(change).toFixed(2) : "0.00"}
                  </li>
                </ul>

                <button
                  className="btn btn-accent w-full text-center flex justify-center"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Cart;
