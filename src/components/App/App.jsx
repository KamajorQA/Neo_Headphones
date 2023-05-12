import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../../layouts/MainLayout';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<></>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
