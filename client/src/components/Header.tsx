import { Link } from "react-router";

export const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-xl font-bold">iRepair</h1>
            <nav className="flex gap-4">
                <Link to="/">Dashboard</Link>
                <Link to="/clients">Clientes</Link>
                <Link to="/service-orders">Ordens de Serviço</Link>
            </nav>
        </header>

    );
};