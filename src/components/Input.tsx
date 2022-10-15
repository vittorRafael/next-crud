interface InputProps {
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    className?: string
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
}

export default function Input(props: InputProps){
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label htmlFor="" className="mb-4">{props.texto}</label>
            <input className={`border border-blue-600 rounded-lg 
            focus:outline-none bg-gray-100 px-4 py-2 ${props.somenteLeitura ? '' : 'focus:bg-white'} `}
            type={props.tipo ?? 'text'} value={props.valor} readOnly={props.somenteLeitura} onChange={e => props.valorMudou?.(e.target.value)} />
        </div>
    )
}