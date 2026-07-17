import { BrowserRouter, Routes, Route } from 'react-router';
import { DashboardPage } from './pages/DashboardPage';
import { ClientsPage } from './pages/ClientsPage';
import { ServiceOrdersPage } from './pages/ServiceOrdersPage';
import { Outlet } from 'react-router';
import { Link, useNavigate } from 'react-router';

const Menu = () => {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/clients">Clientes</Link>
      <Link to="/service-orders">Ordens de Serviço</Link>
    </nav>
  );
};

const MainLayout = () => {
  return (
    <div>
      <header className="p-4 bg-gray-800 text-white">
        <h1>iRepair</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/clients">Clientes</Link>
        </nav>
      </header>
      <main className="p-6">
        <Outlet /> {/* A página filha aparece aqui */}
      </main>
    </div>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/service-orders" element={<ServiceOrdersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;