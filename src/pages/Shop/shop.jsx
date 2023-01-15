import React, {useMemo, useState} from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [searchMin, setSearchMin] = useState('');
  const [searchMax, setSearchMax] = useState('');
  const [productName, setProductName] = useState('');
  const [tagSelect, setTagSelect] = useState('selection');

const listName = [...PRODUCTS];
const listPriceInCrease = [...PRODUCTS]; 
const listPriceDeCrease = [...PRODUCTS]; 
  
     const productSortByName = listName.sort(
       function (a, b) {
         if (a.productName > b.productName) {
           return 1;
         }
         if (a.productName < b.productName) {
           return -1;
         }
         // a must be equal to b
         return 0;
       }
     ); 
      
        
      const productSortByValueInCrease = listPriceInCrease.sort(
        function (a, b) {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          // a must be equal to b
          return 0;
        }
      ); 
     

      const productSortByValueDeCrease = listPriceDeCrease.sort(
        function (a, b) {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
          // a must be equal to b
          return 0;
        }
      ); 
        
 
  const filteredByMin= useMemo( () => {
     return PRODUCTS.filter( (ship) => ship.price >= searchMin);
  }, [searchMin]) ; 

  const filteredByMax = useMemo( () => {
     return PRODUCTS.filter( (ship) => ship.price <= searchMax);
  }, [searchMax]) ; 

  const filteredByPrice = useMemo(() => {
    return filteredByMax.filter( (ship) => ship.price >= searchMin);
  }, [searchMax,searchMin]); 

 const filteredByName = useMemo( () => {
  const lowerProdName = productName.toLowerCase(); 
  return PRODUCTS.filter( (ship) => ship.productName.toLowerCase().includes(lowerProdName));
}, [productName]) ; 

const filteredByNameAndPrice = useMemo ( ()=>{
return filteredByName.filter( (ship) => (ship.price >= searchMin) && (ship.price <= searchMax) );
},[productName,searchMax,searchMin]);

const onChangeSelect = (e) =>{
  setTagSelect(e.target.value); 
}

return (
    <div className="shop">
      <div className="shopTitle">
         <h3>A Maior Multimarcas do País!</h3>
      </div>
    
      <section className="searchBar">
      <h3>Veja nossos produtos ou procure por algum parâmetro</h3>
      <form>
       <input type='number' placeholder="Valor mínimo" value={searchMin} onChange={ (e) => setSearchMin(e.target.value)} />
       
       <input type='number' placeholder="Valor máximo" value={searchMax} onChange={ (e) => setSearchMax(e.target.value)} />
       
       <input type='text' placeholder="Nome do Produto" value={productName} onChange={ (e) => setProductName(e.target.value)} />
       
      <div className="order">
     <select onChange={onChangeSelect}>
      <option value="selection">Selecione</option>
      <option value="decreaseValue">Ordenação Decrescente</option>
      <option value="increaseValue"> Ordenação Crescente </option>
      <option value="nameValue"> Ordenação por nome </option>
     </select>
      </div>
      </form>
    </section>

    {(tagSelect==='nameValue')&& (filteredByNameAndPrice.length===0)&&(!productName)&&
    <div className="products">
          {productSortByName.map((product) => (
            <Product data = {product} />
          ))}
      </div>
    }

    {(tagSelect==="decreaseValue")&& (filteredByNameAndPrice.length===0) &&(!productName)&&
    <div className="products">
          {productSortByValueDeCrease.map((product) => (
            <Product data = {product} />
          ))}
    </div>
    }

    {(tagSelect==="increaseValue")&& (filteredByNameAndPrice.length===0)&&(!productName)&&
    <div className="products">
          {productSortByValueInCrease.map((product) => (
            <Product data = {product} />
          ))}
    </div>
    }

      {(filteredByNameAndPrice.length > 0 )  && 
        <div className="products">
          {filteredByNameAndPrice.map((product) => (
            <Product data = {product} />
          ))}
          <span> <h2>Veja outros produtos da loja!</h2> </span>
        </div>
      }

    {(filteredByName.length > 0 ) && (productName) && (filteredByNameAndPrice.length===0) &&
      <div className="products">
        {filteredByName.map((product) => (
          <Product data = {product} />
        ))}
        <span> <h2>Veja outros produtos da loja!</h2> </span>
      </div>
    }

    
    {(filteredByPrice.length > 0 ) && (filteredByNameAndPrice.length===0) &&
      <div className="products">
        {filteredByPrice.map((product) => (
          <Product data = {product} />
        ))}
        <span> <h2>Veja outros produtos da loja!</h2> </span>
      </div>
    }
    
    {(filteredByMin.length > 0 ) && (searchMin) && (!searchMax) && (filteredByNameAndPrice.length===0) &&
      <div className="products">
        {filteredByMin.map((product) => (
          <Product data = {product} />
      ))}
      <span> <h2>Veja outros produtos da loja!</h2> </span>
      </div>
    }

    {(tagSelect==="selection")&&
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data = {product} />
        ))}
      </div>
      }
     
    </div>
  );
};
