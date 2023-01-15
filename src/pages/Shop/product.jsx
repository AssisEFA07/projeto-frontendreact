import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link, useNavigate } from "react-router-dom";


export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];


  return (
    <section className="product">
    <img src={productImage} />
      <div className="description">
        <p>
       <b>{productName}</b>
        </p>
        <p> ${price}</p>
       
      </div>
     
    
     <Link to={`/product/${id}`}><p>Detalhes do produto</p></Link>
     
     
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Adicionar ao Carrinho {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </section>
  );
};
