import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homebanner from './components/Homebanner';
import Loginpage from './components/Loginpage';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Navigation from './components/LoggedPages/Navigation';
import Menu from './components/LoggedPages/Menu';
import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import Cart from './components/LoggedPages/Cart';
import Creditcard from './components/LoggedPages/Creditcard';
import Success from './components/LoggedPages/Success';
export const cartCount = createContext();
export const userDetail = createContext();

function App() {
  const [count, setCount] = useState([]);
  const [userName,setuserName] = useState([]);

  const onAdd = (data) => {
    setCount(data);
  }

  const onChangeUser = (uname) =>{
    setuserName(uname);
  }

  useEffect(()=>{
    if(localStorage.getItem("mylocal") != undefined){
      let array = JSON.parse(localStorage.getItem("mylocal"));
      setCount(array)
    }
  },[])

  return (
    <>
      <cartCount.Provider value={{ count, onAdd }}>
        <userDetail.Provider value = {{userName,onChangeUser}}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<Loginpage />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login/home" element={<Navigation />}>
              <Route path='menu' element={<Menu />}></Route>
              <Route path="cart" element={<Cart/>}></Route>
              <Route path="credit" element={<Creditcard/>}></Route>
              <Route path="success" element={<Success/>}></Route>
            </Route>
          </Routes>
        </Router>
        </userDetail.Provider>
      </cartCount.Provider>
    </>
  );
}

export default App;
