import { useState } from "react";
import type { CreateClientData } from "../types";

interface NewClientFormProps {
    onCreateClient: (data: CreateClientData) => void;
}

export const NewClientForm = ({ onCreateClient }: NewClientFormProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        onCreateClient({ name, email, phone });
        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <inputValue={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" className="border p-2 rounded w-full" required />
            <inputValue={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 rounded w-full" required />
            <inputValue={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" className="border p-2 rounded w-full" required />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Criar Cliente</button>
        </form>);
};
