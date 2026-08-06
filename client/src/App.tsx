import { BrowserRouter, Routes, Route, Outlet } from 'react-router';
import { Header } from './components/Header';
import { DashboardPage } from './pages/DashboardPage';
import { ClientsPage } from './pages/ClientsPage';
import { ServiceOrdersPage } from './pages/ServiceOrdersPage';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <Outlet />
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