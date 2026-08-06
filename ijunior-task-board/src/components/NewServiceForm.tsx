import { useState } from 'react';
import type { OrdemServico } from '../types';

interface NewServiceFormProps {
    onAddServico: (ordem: OrdemServico) => void;
}

export function NewServiceForm({ onAddServico }: NewServiceFormProps) {
    const [nomeCliente, setNomeCliente] = useState('');
    const [modeloAparelho, setModeloAparelho] = useState('');
    const [defeito, setDefeito] = useState('');

    function HandleSubmit(event: React.FormEvent) {
        event.preventDefault();

        onAddServico({
            id: Date.now(),
            nomeCliente,
            modeloAparelho,
            defeito,
            status: 'aberto'
        });

        // Limpar os campos do formulário
        setNomeCliente('');
        setModeloAparelho('');
        setDefeito('');
    }

    return (
        <form onSubmit={HandleSubmit} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <input name="nomeCliente" value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} placeholder="Nome do Cliente" className="border p-2 mb-2 w-full" />
            <input name="modeloAparelho" value={modeloAparelho} onChange={(e) => setModeloAparelho(e.target.value)} placeholder="Modelo do Aparelho" className="border p-2 mb-2 w-full" />
            <input name="defeito" value={defeito} onChange={(e) => setDefeito(e.target.value)} placeholder="Defeito" className="border p-2 mb-2 w-full" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Salvar Ordem</button>
        </form >
    );
}

