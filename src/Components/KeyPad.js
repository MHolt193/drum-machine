import "./KeyPad.css";
import guitar from './Sounds/Guitar/guitar'
import drums from './Sounds/Drums/drums'
import piano from './Sounds/Piano/piano'
import React from "react";
class KeyPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: ''
    }
  }
  clickHandler(event){
      document.getElementById(event.target.innerText).play();
  }
  render() {
    return (
      <div className="container keypad">
        <div className="button-group">
          <button
            className={
             this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad q"
            }
            id="sound1"
            onClick={this.clickHandler.bind(this)}
          >Q
            <audio
              src={this.props.mode === "Guitar" ? guitar[0].src: this.props.mode === "Drums" ? drums[0].src: piano[0].src}
              className="clip"
              id='Q'
            />
          </button>
          <button
            className={
              this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad w"
            }
            id="sound2"
            onClick={this.clickHandler.bind(this)}
          >
            W
            <audio
              src={this.props.mode === "Guitar" ? guitar[1].src: this.props.mode === "Drums" ? drums[1].src: piano[1].src}
              className="clip"
              id='W'
            />
          </button>
          <button
            className={
              this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad e"
            }
            id="sound3"
            onClick={this.clickHandler.bind(this)}
          >
            E
            <audio
              src={this.props.mode === "Guitar" ? guitar[2].src: this.props.mode === "Drums" ? drums[2].src: piano[2].src}
              className="clip"
              id='E'
            />
          </button>
        </div>
        <div className="button-group">
          <button
            className={
              this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad a"
            }
            id="sound4"
            onClick={this.clickHandler.bind(this)}
          >
            A
            <audio
              src={this.props.mode === "Guitar" ? guitar[3].src: this.props.mode === "Drums" ? drums[3].src: piano[3].src}
              className="clip"
              id='A'
            />
          </button>
          <button
            className={
             this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad s"
            }
            id="sound5"
            onClick={this.clickHandler.bind(this)}
          >
            S
            <audio
              src={this.props.mode === "Guitar" ? guitar[4].src: this.props.mode === "Drums" ? drums[4].src: piano[4].src}
              className="clip"
              id='S'
            />
          </button>
          <button
            className={
             this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad d"
            }
            id="sound6"
            onClick={this.clickHandler.bind(this)}
          >
            D
            <audio
              src={this.props.mode === "Guitar" ? guitar[5].src: this.props.mode === "Drums" ? drums[5].src: piano[5].src}
              className="clip"
              id='D'
            />
          </button>
        </div>
        <div className="button-group">
          <button
            className={
             this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad z"
            }
            id="sound7"
            onClick={this.clickHandler.bind(this)}
          >
            Z
            <audio
              src={this.props.mode === "Guitar" ? guitar[6].src: this.props.mode === "Drums" ? drums[6].src: piano[6].src}
              className="clip"
              id='Z'
            />
          </button>
          <button
            className={
             this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad x"
            }
            id="sound8"
            onClick={this.clickHandler.bind(this)}
          >
            X
            <audio
              src={this.props.mode === "Guitar" ? guitar[7].src: this.props.mode === "Drums" ? drums[7].src: piano[7].src}
              className="clip"
              id='X'
            />
          </button>
          <button
            className={
              this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad c"
            }
            id="sound9"
            onClick={this.clickHandler.bind(this)}
          >
            C
            <audio
              src={this.props.mode === "Guitar" ? guitar[8].src: this.props.mode === "Drums" ? drums[8].src: piano[8].src}
              className="clip"
              id='C'
            />
          </button>
        </div>
      </div>
    );
  }
}

export default KeyPad;
