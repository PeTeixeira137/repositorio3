import { useEffect, useState } from "react";
import { getAllClients, createClient, deleteClient } from "../services/clientService";
import { NewClientForm } from "../components/NewClientForm";
import type { Client, CreateClientData } from "../types";

export const ClientsPage = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function load() {
            try {
                setClients(await getAllClients());
            } catch {
                setError("Não foi possível carregar os clientes.");
            } finally {
                setIsLoading(false);
            }
        }
        load();
    }, []);

    async function handleCreate(newClient: CreateClientData) {
        try {
            const created = await createClient(newClient);
            setClients((prev) => [...prev, created]);
        } catch {
            setError("Não foi possível cadastrar o cliente.");
        }
    }

    async function handleDelete(id: number) {
        try {
            await deleteClient(id);
            setClients((prev) => prev.filter((c) => c.id !== id));
        } catch {
            setError("Não foi possível remover o cliente.");
        }
    }

    if (isLoading) return <p>Carregando</p>;

    return (
        <div>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <NewClientForm onCreate={handleCreate} />
            {clients.map((c) => (
                <div key={c.id} className="bg-white shadow-md rounded-lg p-4 mb-2 flex justify-between items-center">
                    <span>{c.name} — {c.email}</span>
                    <button onClick={() => handleDelete(c.id)} className="text-red-600 text-sm">Remover</button>
                </div>
            ))}
        </div>
    );
};