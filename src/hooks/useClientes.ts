import { useState, useEffect } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useVisible from "./useVisible"

export default function UseClientes() {

    const { exibirFormulario, exibirTabela, formularioVisivel, tabelaVisivel } = useVisible()

    const repo: ClienteRepositorio = new ColecaoCliente()


    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    function novoCliente() {
        exibirFormulario()
        setCliente(Cliente.vazio())
    }


    return {
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        cliente,
        clientes,
        tabelaVisivel,
        exibirTabela,
    }
}