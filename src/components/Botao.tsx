interface BotaoProps {
    cor?: 'green' | 'blue' | 'red'
    children: any
    className?: string
    onClick?: () => void 
}

export default function Botao(props: BotaoProps){
    
    const classeVerde = props.cor == 'green' ? `from-green-500 to-green-700` : props.cor == 'blue' ? `from-blue-500 to-blue-700` : props.cor == 'red' ? `from-red-500 to-red-700` : null

    return (
        <button onClick={props.onClick} className={`bg-gradient-to-r ${classeVerde} text-white px-4 py-2 rounded-md ${props.className}`}>
            {props.children}
        </button>
    )
}