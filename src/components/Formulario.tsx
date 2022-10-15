import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Input from "./Input";

interface FormProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void 
    cancelado?: () => void 
}

export default function Formulario(props: FormProps) {

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente.nome ?? '')
    const [idade, setIdade] = useState(props.cliente.idade ?? 18)

    return (
        <div>
            {id ?
                <Input className="mb-4" somenteLeitura valor={id} texto="Código" />
            : false}
            <Input texto="Nome" className="mb-4" valor={nome} valorMudou={setNome}/>
            <Input texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} />
            <div className="mt-7 flex justify-end">
                <Botao cor="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>Salvar</Botao>
                <Botao cor="red" onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}