
import React, { useEffect, useState } from "react";
 import {useSelector} from "react-redux";
 import { NavLink } from "react-router-dom";
 import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    setTotalAmt(cart.reduce((total, item) => total + item.price, 0));
  }, [cart]);

  return (
    <div>
      {!cart.length > 0 ? (
        <div className="flex items-center flex-col justify-center h-[100vh]">
          <h1 className="text-xl font-bold text-slate-700 capitalize">
            Your cart is empty!
          </h1>
          <NavLink to="/">
            <div>
              <button className="border-2 border-orange-600 m-4 px-10 py-3 bg-orange-600 rounded-lg text-md font-bold text-white uppercase hover:border-orange-600 hover:border-2 hover:text-orange-600 hover:bg-white transition-all duration-500">
                Shop Now
              </button>
            </div>
          </NavLink>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center mt-16">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => {
                
              return (
                <CartItem  
                  key={item.id}
                  item={item}
                  itemIndex={index}
                  
                ></CartItem>
            );              
            })}       
          </div>

          <div className="w-[100%] md:w-[40%] mt-5 flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between ">
              <div className="flex flex-col gap-5 ">
                <div className="font-semibold text-xl text-orange-700 font-serif uppercase">
                  Your Cart
                </div>
                <div className="text-5xl text-orange-600 uppercase font-serif font-bold  -mt-5">
                  Summary
                </div>
                <div className="text-xl font-semibold">
                  <span className="text-gray-700 font-bold text-xl">
                    Total Item: {cart.length}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 pb-12">
              <p className="text-xl font-bold text-gray-700">
                Total Amount: ${totalAmt}
              </p>
              <button className="bg-orange-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 capitalize border-orange-600 font-bold hover:text-orange-600 p-3 text-xl">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
