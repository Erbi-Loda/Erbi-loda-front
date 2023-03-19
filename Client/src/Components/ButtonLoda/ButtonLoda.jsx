import "./ButtonLoda.style.css";

export default function ButtonLoda({ text, icon, fs, type, cb, setTo }) {
  return (
    <>
      <button
        onClick={cb}
        id="estado-cargando"
        className={type === "small" ? "buttonLodaSmall" : "buttonLoda"}
      >
        {/* {console.log(cb)} */}
        <span style={fs ? { fontSize: fs } : { fontSize: 18 }}>
          {icon} {text}
        </span>
      </button>
    </>
  );
}
