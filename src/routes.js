import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { Navbar } from "./components/Navbar/navbar";
import { Shop } from './pages/Shop/shop';
import { Contact } from './pages/Contact/contact';
import { Cart } from './pages/Cart/cart';
import { ShopContextProvider } from "./context/shop-context";
import  Erro  from './pages/Erro/Erro.js';
import  Info from './pages/Info/Info.js'; 
import Footer from './components/Footer/index'; 
import LoginPage from './pages/Login/LoginPage';

function RoutesApp() {
    return(
       
        <BrowserRouter>
        <ShopContextProvider>
         
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/product/:id' element= { <Info/> }/>
              <Route path='/login' element = { <LoginPage/> }/>

             <Route path='*' element = { <Erro/> }/>
            </Routes>
          <Footer/>
        </ShopContextProvider>
        </BrowserRouter>
      
       
    );
}


export default RoutesApp; 