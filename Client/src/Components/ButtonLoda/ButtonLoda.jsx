import './ButtonLoda.style.css'


export default function ButtonLoda({text, icon}){

    return(
        <>
            <button className='buttonLoda'>
                <span>{icon} {text}</span>
            </button>
        </>
    )
}