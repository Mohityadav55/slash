import React from "react";
import {useSelector,useDispatch} from "react-redux";
import { toast } from "react-toastify";
import {add, remove } from "../redux/slices/cartSlice";


const Product = ({post}) => {

    const {cart} = useSelector((state) => (state));
    const dispatch = useDispatch();
    

    const addToCart = () => {
        
        dispatch(add(post));
        toast.success("Item added to Cart");
    };
    
    const removeFromCart = () => {
        // console.log("Removing from cart");
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    };
    

    return (
        <div className="group hover:scale-110 transition-all duration-500 ease-in-out flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5 rounded-xl">
            <div>
            <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 "> 
                {post.title} </p>
            </div>
            <div>
            <p className="text-[10px] w-40 text-gray-400 font-normal text-left">
                 {post.description.split(" ").slice(0,10).join(" ") + "..."} </p>
            </div>
            <div className="h-[180px]">
                <img src={post.image} alt=" not uploading"  className="h-full w-full"/>
            </div>

            <div className="flex justify-evenly gap-12 items-center  w-full mt-5 mb-5">
             <div>
             <p className="text-orange-600 font-serif font-extrabold">
                 ${post.price} </p>
             </div>
            
             {
                cart.some((item) => item.id === post.id) ?
                (<button  
                className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in-out text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
                onClick={removeFromCart}>
                    Remove Item
                </button>) :
                (<button 
                className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in-out text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
                onClick={addToCart}>
                    Add To Cart
                </button>)
             }
            </div>
        </div>
    )
};
export default Product;