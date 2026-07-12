import { useState } from 'react';
import { Header } from './components/Header';
import { ServiceCard } from './components/ServiceCard';
import { NewServiceForm } from './components/NewServiceForm';
import type { OrdemServico } from './types';


export function App() {
  const [ordensServico, setOrdensServico] = useState<OrdemServico[]>([
    {
      id: 1,
      nomeCliente: 'Pedro Farace',
      modeloAparelho: 'Samsung A22 5G',
      defeito: 'Tela quebrada',
      status: 'aberta'
    },
    {
      id: 2,
      nomeCliente: 'Cecília',
      modeloAparelho: 'Iphone 11',
      defeito: 'Bateria não carrega',
      status: 'em andamento'
    },
  ]);

  function adicionarOrdemServico(novaOrdem: OrdemServico) {
    setOrdensServico([...ordensServico, novaOrdem]);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <NewServiceForm onAddServico={adicionarOrdemServico} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ordensServico.map((ordem) => (
            <ServiceCard key={ordem.id} ordem={ordem} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App;