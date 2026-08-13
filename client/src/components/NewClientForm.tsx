import { useState } from "react";
import type { CreateClientData } from "../types";

interface NewClientFormProps {
    onCreateClient: (data: CreateClientData) => void;
}

export const NewClientForm = ({ onCreateClient }: NewClientFormProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        onCreateClient({ name, email, phone });
        setName("");
        setEmail("");
        setPhone("");
        setAddress("")
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" className="border p-2 rounded w-full" required />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 rounded w-full" required />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" className="border p-2 rounded w-full" required />
            <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Endereço" className="border p-2 rounded w-full" />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Criar Cliente</button>
        </form>);
};
