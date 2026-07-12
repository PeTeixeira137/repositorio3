import type { OrdemServico } from '../types';

interface ServiceCardProps {
    ordem: OrdemServico;
}

export function ServiceCard({ ordem }: ServiceCardProps) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold mb-2">{ordem.nomeCliente}</h2>
            <p className="text-gray-600 mb-1">Modelo: {ordem.modeloAparelho}</p>
            <p className="text-gray-600 mb-1">Defeito: {ordem.defeito}</p>
            <span className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${ordem.status === 'aberta' ? 'bg-red-500 text-white' : ordem.status === 'em andamento' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'}`}>
                {ordem.status}
            </span>
        </div>
    )
}