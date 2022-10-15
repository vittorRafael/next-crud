import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import { UserPlus } from '../components/Icones';
import Formulario from "../components/Formulario";
import UseClientes from "../hooks/useClientes";

export default function Home() {

  const { exibirTabela,cliente, tabelaVisivel, clientes, excluirCliente, novoCliente, obterTodos, salvarCliente, selecionarCliente } = UseClientes()

  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-blue-600 to-green-400 text-white'>
      <Layout titulo="Cadastro Simples" >
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className='mb-4' cor="green" onClick={novoCliente}>
                {UserPlus}
              </Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente} cancelado={exibirTabela} clienteMudou={salvarCliente} />
        )}
      </Layout>
    </div>
  )
}
