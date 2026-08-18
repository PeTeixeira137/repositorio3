import { useState } from "react";
import type { Client, CreateServiceOrderData } from "../types";

interface NewServiceOrderFormProps {
    clients: Client[];
    onCreateServiceOrder: (data: CreateServiceOrderData) => void;
}

export const NewServiceOrderForm = ({ clients, onCreateServiceOrder }: NewServiceOrderFormProps) => {
    const [clientId, setClientId] = useState("");
    const [device, setDevice] = useState("");
    const [issue, setIssue] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        if (!clientId) return;
        onCreateServiceOrder({ client_id: Number(clientId), device, issue, status: "open" });
        setClientId("");
        setDevice("");
        setIssue("");
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <select value={clientId} onChange={(e) => setClientId(e.target.value)} className="border p-2 rounded w-full" required>
                <option value="">Selecione o cliente</option>
                {clients.map((client) => (
                    <option key={client.id} value={client.id}>{client.name}</option>))}
            </select>
            <input value={device} onChange={(e) => setDevice(e.target.value)} placeholder="Dispositivo" className="border p-2 rounded w-full" required />
            <input value={issue} onChange={(e) => setIssue(e.target.value)} placeholder="Problema" className="border p-2 rounded w-full" required />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Criar Ordem de Serviço</button>
        </form>
    );
}