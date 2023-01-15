import './style.css'
import { FaHeart } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TextBolder } from 'phosphor-react';

function Footer(){
    return(
        <footer className="footer">
        <div className="footerSocial">
          <a href="https://www.instagram.com/"  target="_blank"
          rel="noopener noreferrer">
            <FaInstagram size="40"  color="#FFFFFF"/>
          </a>
          <a href="https://www.youtube.com/"  target="_blank"
          rel="noopener noreferrer">
            <FaYoutube size="40"  color="#FFFFFF"/>
            </a>  
        </div>
        <div className='footerMaxim'><h3>StarMan WebCommerce: A casa da Nave Espacial!</h3></div>
        <div className="footerCopyright">
        <span>Made with <FaHeart color="#B51942"/> by <a href="https://https://github.com/AssisEFA07"  target="_blank"
          rel="noopener noreferrer">AssisEFA07</a> <FaGithub color="#FFFFFF"/></span>
        </div>
      </footer>
    );
}

export default Footer; 