export interface OrdemServico {
    id: number;
    nomeCliente: string;
    modeloAparelho: string;
    defeito: string;
    status: 'aberta' | 'em andamento' | 'concluida';
}