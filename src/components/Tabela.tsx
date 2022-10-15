import Cliente from '../core/Cliente'
import { Edit, Delete } from './Icones'


interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className='text-left p-3'>Código</th>
                <th className='text-left p-3'>Nome</th>
                <th className='text-left p-3'>Idade</th>
                {exibirAcoes ? <th className= "p-3" >Ações</th>: false}
            </tr>
        )
    }


    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`bg-gradient-to-r ${i % 2 == 0 ? ' from-sky-100 to-teal-100' : 'from-sky-50 to-teal-50'}`}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes (cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className='flex gap-2 justify-center'>
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className='flex justify-center items-center text-green-600 hover:bg-purple-50 rounded-full p-2'>{Edit}</button>
                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className='flex justify-center items-center text-red-500 hover:bg-purple-50 rounded-full p-2'>{Delete}</button>
                ) : false}
            </td>
        )
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className='text-gray-100 bg-gradient-to-r from-sky-700 to-teal-700'>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}