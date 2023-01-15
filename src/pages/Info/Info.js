import './productinfo.css'; 
import {useParams} from 'react-router-dom'; 
import { PRODUCTS } from "../../products";
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import '../Cart/cart.css'; 



export default function  Info () {
    const {id } = useParams();
    const indice = id - 1; 
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
    const cartItemCount = cartItems[id];
      
    return( 
    <div className='container'>
    <h1> Produto {id}</h1>
      <section className='productInfo'>
        <h1>{PRODUCTS[indice].productName}</h1>
        <img src={PRODUCTS[indice].productImage} alt={PRODUCTS[indice].productName} />
        <h3>Informações:</h3>
        <span>{PRODUCTS[indice].description}</span> 
        <br/>
        <div className='areaBotoes'>
        <button><a href={`https://www.youtube.com/results?search_query=${PRODUCTS[indice].productName} StarShip`} target="blank"
          rel="noopener noreferrer">Saiba Mais!</a> </button>
        </div>
     
    <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Adicionar ao Carrinho {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>

        </section>
     </div>
   );
}
