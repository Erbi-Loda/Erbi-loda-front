import './ButtonLoda.style.css'


export default function ButtonLoda({text, icon,fs}){

    return(
        <>
            <button className='buttonLoda'>
                <span style={fs?{fontSize:fs}:{fontSize:18}}>{icon} {text}</span>
            </button>
        </>
    )
}