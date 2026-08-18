import type { Client, ServiceOrder } from '../types';

interface ServiceCardProps {
    client: Client;
    serviceOrders: ServiceOrder[];
    onDeleteServiceOrder: (id: number) => void;
}

function getStatusClasses(status: ServiceOrder['status']): string {
    if (status === 'open') {
        return 'bg-red-500 text-white';
    }
    if (status === 'in_progress') {
        return 'bg-yellow-500 text-white';
    }
    if (status === 'done') {
        return 'bg-green-500 text-white';
    }
    return '';
}

export const ServiceCard = ({ client, serviceOrders, onDeleteServiceOrder }: ServiceCardProps) => {
    return (
        <div className="border rounded p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">{client.name}</h2>
            <div className="space-y-2">
                {serviceOrders.map((order) => (
                    <div key={order.id} className={`p-2 rounded ${getStatusClasses(order.status)}`}>
                        <p className="font-semibold">{order.device}</p>
                        <p className="text-sm">Status: {order.status}</p>
                        <button
                            onClick={() => onDeleteServiceOrder(order.id)}
                            className="mt-2 bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded">
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};