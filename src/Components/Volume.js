import "./NavBar.css"
const Volume = (props) => {
    return(
        <div>
           <input className="dropdown-item volume-control" type='range' min='0.1' max='1.0' step='0.1' id='volume' onChange={props.onChange}></input>
        </div>
    )
}

export default Volume;