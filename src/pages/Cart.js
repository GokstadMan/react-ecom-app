import { useContext } from "react";
import CartContext from "../components/Context/CartContext";

function Cart() {

  const[cart,setCart] = useContext(CartContext);

  return (
    <div className="mx-20 my-8">
      <h1 className="mb-6 font-semibold text-4xl">Cart</h1>
      <div className="flex flex-col gap-6 p-4 bg-gray-200">
        {!(cart.length>0) ? "Nothing in Cart" : null}
        {cart.map((cartItem,index) => (
          <div className="flex gap-4 items-center">
            <img src={cartItem.imgUrl} alt="cart-pic" className="w-[10rem] h-[10rem] object-cover" />
            <div>
              <h3 className="text-2xl">{cartItem.name}</h3>
              <button className="bg-rose-500 text-white p-2 mt-4 rounded-xl">Remove from Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart
