import React, { useEffect } from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Cards } from './components/Cards/Cards';
import { Cart } from './components/Cart/Cart';
import { useDispatch } from 'react-redux';
import { getFromLocalStorage } from './store/action-creators/cart';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFromLocalStorage());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
