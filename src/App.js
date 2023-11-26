import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cart';
import Product from './Components/Product';
import NavbarComp from './Components/NavbarComp';
import {Switch,Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
// import store from "./Components/Store"
function App(){
  return (
   <>
   {/* <h1>Vaishali</h1> */}
   {/* <Provider store={store}> */}
   <NavbarComp/>
   <Routes>
    <Route path="/" element={<Product/>}/>
    <Route path="/cart" element={<Cart/>}/>

   </Routes>
     
     {/* </Provider> */}
   
   </>
  );
}

export default App;
