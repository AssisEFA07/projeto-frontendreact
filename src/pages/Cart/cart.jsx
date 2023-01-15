import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="container"> 
    <div className="cart">
      <div>
        <h1>Itens de seu Carrinho:</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p> <br/>
          <button onClick={() => navigate("/")}> Continue comprando </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Finalizar! {" "}
          </button>
        </div>
      ) : (
        <h1> Seu carrinho de Compras está vazio!</h1>
      )}
      <br/><br/><br/><br/><br/>
    </div>
    </div>
  );
};
