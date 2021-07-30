import "./Display.css";
const Display = (props) => {
  if (props.power === "false") {
    return (
      <div className="display-off" id="display">
        <p></p>
      </div>
    );
  } else {
    return (
      <div className="display" id="display">
        <p>{props.value}</p>
      </div>
    );
  }
};

export default Display;
