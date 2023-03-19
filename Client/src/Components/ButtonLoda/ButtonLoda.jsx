import './ButtonLoda.style.css'


export default function ButtonLoda({text, icon,fs,type,cb}){

    return(
        <>
            <button onClick={cb} id="estado-cargando" className={type==="small"?'buttonLodaSmall':'buttonLoda'}>
                <span style={fs?{fontSize:fs}:{fontSize:18}}>{icon} {text}</span>
            </button>
        </>
    )
}