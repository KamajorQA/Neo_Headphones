import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { CardContext } from '../../context/cardContext';
import { MainLayout } from '../../layouts/MainLayout';
import { Main } from '../Main/Main';
import { Cart } from '../Cart/Cart';
import { Contacts } from '../../layouts/Contacts';
import { NotFound } from '../../layouts/NotFound';
import './app.css';

function App() {
  const [stored, setStored] = useState([]);

  const cardProvider = {
    setStored,
    stored,
  };

  return (
    <BrowserRouter>
      <CardContext.Provider value={cardProvider}>
        <div className="app">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Main />} />
              <Route path="cart" element={<Cart />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </CardContext.Provider>
    </BrowserRouter>
  );
}

export default App;
