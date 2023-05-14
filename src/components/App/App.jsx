import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../../layouts/MainLayout';
import { Main } from '../Main/Main';
import { Contacts } from '../../layouts/Contacts';
import { NotFound } from '../../layouts/NotFound';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
