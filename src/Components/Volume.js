import "./NavBar.css";
const Volume = (props) => {
  return (
    <div>
      <input
        className="dropdown-item"
        type="range"
        min="0"
        max="1.0"
        step="0.1"
        value={props.volume}
        id="volume"
        onChange={props.volumeHandler}
      ></input>
    </div>
  );
};

export default Volume;
