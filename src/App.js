import React from "react";
import NavBar from "./Components/NavBar";
import KeyPad from "./Components/KeyPad";
import Display from "./Components/Display";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "Drums",
      volume: 0.5,
      power: "false",
      sound: "Loading...",
    };
    this.modeHandler = this.modeHandler.bind(this);
    this.volumeHandler = this.volumeHandler.bind(this);
    this.powerHandler = this.powerHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
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
  clickHandler(event) {
    document.getElementById(event.target.innerText).play();
    this.setState({ sound: event.target.id });
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
        />
        <Display value={this.state.sound} power={this.state.power} />
        <KeyPad
          volume={this.state.volume}
          clickHandler={this.clickHandler}
          mode={this.state.mode}
          power={this.state.power}
        />
      </div>
    );
  }
}

export default App;
