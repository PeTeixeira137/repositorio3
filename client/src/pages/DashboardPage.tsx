import { useEffect, useState } from "react";
import { getAllServiceOrders } from "../services/serviceOrderService";
import { getAllClients } from "../services/clientService";
import { ServiceCard } from "../components/ServiceCard";
import type { Client, ServiceOrder } from "../types";

export const DashboardPage = () => {
    const [orders, setOrders] = useState<ServiceOrder[]>([]);
    const [clients, setClients] = useState<Client[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function load() {
            try {
                setOrders(await getAllServiceOrders());
                setClients(await getAllClients());
            } catch {
                setError("Não foi possível carregar as ordens de serviço.");
            } finally {
                setIsLoading(false);
            }
        }
        load();
    }, []);

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {orders.map((o) => {
                const client = clients.find((c) => c.id === o.client_id);
                if (!client) return null;
                return (
                    <ServiceCard key={o.id} serviceOrders={[o]} client={client} onDeleteServiceOrder={() => { }} />
                );
            })}
        </div>
    );
};