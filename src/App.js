import React from "react";
import NavBar from "./Components/NavBar";
import KeyPad from "./Components/KeyPad";
import Display from "./Components/Display";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'Guitar',
      volume: '0.5',
      power: 'false',
      sound: 'Loading...'
    }
    this.modeHandler = this.modeHandler.bind(this);
    this.volumeHandler = this.volumeHandler.bind(this);
    this.powerHandler = this.powerHandler.bind(this);
  }
  modeHandler = (event) =>{
    this.setState({mode: 'event.target.value'})
  }
  volumeHandler = (event) =>{
    this.setState({volume:'event.target.volume'})
  }
  powerHandler = () =>{
    this.state.power === 'false'? this.setState({power: 'true'}) : this.setState({power: 'false'})
  }
  render() {
    return (
      <div className="container container-fluid" id="drum-machine">
        <NavBar modeHandler={this.modeHandler} volumeHandler={this.volumeHandler} powerHandler={this.powerHandler} power={this.state.power} />
        <Display value={this.state.sound} power={this.state.power} />
        <KeyPad mode={this.state.mode} power={this.state.power} />
      </div>
    );
  }
}

export default App;
