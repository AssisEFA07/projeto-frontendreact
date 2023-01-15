import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logo512 from './logo512.png'; 

export const Navbar = () => {

 return (
    <header className="navbar">
    <div className="logo"> <Link to="/"> <img src={logo512}/> <h2>StarMan</h2> </Link> </div>
   <div className="links">
        <Link to='/'> Produtos </Link>
        <Link to="/contact"> Contato </Link>
        <Link to="/login"> Login </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </header>
  );
};
