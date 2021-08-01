import React from "react";
import NavBar from "./Components/NavBar";
import KeyPad from "./Components/KeyPad";
import Display from "./Components/Display";
import Info from "./Components/Info";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "Drums",
      volume: 0.5,
      power: "false",
      sound: "Loading...",
      modalShow: false,
    }; //bind all handlers
    this.modeHandler = this.modeHandler.bind(this);
    this.volumeHandler = this.volumeHandler.bind(this);
    this.powerHandler = this.powerHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.keyPressHandler = this.keyPressHandler.bind(this);
    this.setModalShow = this.setModalShow.bind(this);
  } //define handlers
  modeHandler = (event) => {
    this.setState({ mode: event.target.innerText });
  };
  volumeHandler = (event) => {
    this.setState({ volume: event.target.value });
  };
  powerHandler = () => {
    this.state.power === "false"
      ? this.setState({ power: "true" })
      : this.setState({ power: "false" });
  };
  clickHandler = (event) => {
    let audio = document.getElementById(event.target.innerText);
    audio.currentTime = 0;
    audio.volume = this.state.volume;
    audio.play();
    this.setState({ sound: event.target.id });
  };
  keyPressHandler = (event) => {
    if ("QWEASDZXC".includes(event.key.toUpperCase()) && this.state.power ==='true') {
      let audio = document.getElementById(event.key.toUpperCase());
      audio.currentTime = 0;
      audio.volume = this.state.volume;
      audio.play();
      this.setState({ sound: audio.parentNode.id });
    }
  };
  setModalShow = () => {
    this.state.modalShow === false
      ? this.setState({ modalShow: true })
      : this.setState({ modalShow: false });
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keyPressHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressHandler);
  }
  render() {
    return (
      <div className="container container-fluid" id="drum-machine">
        <NavBar
          modeHandler={this.modeHandler}
          volumeHandler={this.volumeHandler}
          volume={this.state.volume}
          powerHandler={this.powerHandler}
          power={this.state.power}
          info={this.setModalShow}
        />
        <Display value={this.state.sound} power={this.state.power} />
        <KeyPad
          volume={this.state.volume}
          keyPressHandler={this.keyPressHandler}
          clickHandler={this.clickHandler}
          mode={this.state.mode}
          power={this.state.power}
        />
        <Info show={this.state.modalShow} onHide={this.setModalShow} />
      </div>
    );
  }
}

export default App;
