import { useEffect, useState } from "react";
import { getAllServiceOrders, createServiceOrder, deleteServiceOrder } from "../services/serviceOrderService";
import { getAllClients } from "../services/clientService";
import { ServiceCard } from "../components/ServiceCard";
import { NewServiceOrderForm } from "../components/NewServiceOrderForm";
import type { Client, CreateServiceOrderData, ServiceOrder } from "../types";

export const ServiceOrdersPage = () => {
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

    async function handleCreate(newOrder: CreateServiceOrderData) {
        try {
            const created = await createServiceOrder(newOrder);
            setOrders((prev) => [...prev, created]);
        } catch {
            setError("Não foi possível registrar a ordem de serviço.");
        }
    }

    async function handleDelete(id: number) {
        try {
            await deleteServiceOrder(id);
            setOrders((prev) => prev.filter((o) => o.id !== id));
        } catch {
            setError("Não foi possível remover a ordem de serviço.");
        }
    }

    if (isLoading) return <p>Carregando...</p>;

    return (
        <div>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <NewServiceOrderForm clients={clients} onCreate={handleCreate} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {orders.map((o) => (
                    <ServiceCard key={o.id} serviceOrder={o} client={clients.find((c) => c.id === o.client_id)} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};