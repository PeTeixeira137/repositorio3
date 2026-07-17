import { NavLink } from "react-router";

const linkClasses = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200";
};

export const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-xl font-bold">iRepair</h1>
            <nav className="mt-2">
                <NavLink to="/" className={linkClasses}>Dashboard</NavLink>
                <NavLink to="/clients" className={linkClasses}>Clientes</NavLink>
                <NavLink to="/service-orders" className={linkClasses}>Ordens de Serviço</NavLink>
            </nav>
        </header>

    )
}