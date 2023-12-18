import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaClient from '../pages/paginaClient.pages';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Outras rotas aqui, se necessário */}
        <Route path="/paginaClient" element={<PaginaClient />} />
        <Route path="/client" element={<PaginaClient />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
