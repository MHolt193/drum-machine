import "./KeyPad.css";
import React from "react";
class KeyPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: ''
    }
  }
  clickHandler(event){
      document.getElementById('Q').play();
  }
  render() {
    return (
      <div className="container keypad">
        <div className="button-group">
          <div
            className={
             this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad q"
            }
            id="sound1"
            onClick={this.clickHandler.bind(this)}
          >Q
            <audio
              src={guitar[0].src}
              className="clip"
              id='Q'
            />
          </div>
          <div
            className={
              this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad w"
            }
            id="sound2"
          >
            W
          </div>
          <div
            className={
              this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad e"
            }
            id="sound3"
          >
            E
          </div>
        </div>
        <div className="button-group">
          <div
            className={
              this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad a"
            }
            id="sound4"
          >
            A
          </div>
          <div
            className={
             this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad s"
            }
            id="sound5"
          >
            S
          </div>
          <div
            className={
             this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad d"
            }
            id="sound6"
          >
            D
          </div>
        </div>
        <div className="button-group">
          <div
            className={
             this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad z"
            }
            id="sound7"
          >
            Z
          </div>
          <div
            className={
             this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad x"
            }
            id="sound8"
          >
            X
          </div>
          <div
            className={
              this.props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad c"
            }
            id="sound9"
          >
            C
          </div>
        </div>
      </div>
    );
  }
}
const guitar = [
  {
    id: "Pluck",
    keyCode: 81,
    src: "./Sounds/Guitar/guitarpluking.mp3",
    keyTrigger: "Q",
  },
  {
      id: "Mellow-1",
      keyCode: 87,
      src: './Sounds/Guitar/mellow-guitar-chord-1.mp3',
      keyTrigger: 'W'
  },
  {
      id: "Mellow-2",
      keyCode: 69,
      src: './Sounds/Guitar/mellow-guitar-chord-2.mp3',
      keyTrigger: 'E'
  },
  {
      id: "Mellow-3",
      keyCode: 65,
      src: './Sounds/Guitar/mellow-guitar-chord-3.mp3',
      keyTrigger: 'A'

  },
  {
      id: 'Pluck-2',
      keyCode: 83,
      src: './Sounds/Guitar/plucking-guitar.mp3',
      keyTrigger: 'S'
  },
  {
      id: 'Guitar-Lick',
      keyCode: 68,
      src: './Sounds/Guitar/straight-up-guitarlick-9.mp3',
      keyTrigger: 'D'
  },
  {
      id: 'String-Slip',
      keyCode: 90,
      src: './Sounds/Guitar/stringslip.mp3',
      keyTrigger: 'Z'

  },
  {
      id: 'Twangy-Bendy',
      keyCode: 88,
      src: './Sounds/Guitar/twangybendy.mp3',
      keyTrigger: 'X'
  },
  {
      id: 'Wah-Down',
      keyCode: 67,
      src: './Sounds/Guitar/wah-down.mp3',
      keyTrigger: 'C'
  }
];
const drums = [
{
    
}
]
export default KeyPad;
