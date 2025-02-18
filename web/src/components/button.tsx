interface ButtonProps {
    text?: string
}


export function Button(props: ButtonProps){
    return <button className="bg-violet-500 px-5 border-r-red-100 rounded-sm">{props.text || 'enviar'}</button>
}