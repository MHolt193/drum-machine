import "./KeyPad.css";
import guitar from './Sounds/Guitar/guitar'
import drums from './Sounds/Drums/drums'
import piano from './Sounds/Piano/piano'
import React from "react";




const KeyPad = (props) => {
    return (
      <div className="container keypad">
        <div className="button-group">
          <button
            className={
             props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad q"
            }
            id={props.mode === "Guitar" ? guitar[0].id: props.mode === "Drums" ? drums[0].id: piano[0].id}
            onClick={props.clickHandler}
          >Q
            <audio 
              src={props.mode === "Guitar" ? guitar[0].src: props.mode === "Drums" ? drums[0].src: piano[0].src}
              className="clip"
              id='Q'
            />
          </button>
          <button
            className={
              props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad w"
            }
            id={props.mode === "Guitar" ? guitar[1].id: props.mode === "Drums" ? drums[1].id: piano[1].id}
            onClick={props.clickHandler}
          >
            W
            <audio
              src={props.mode === "Guitar" ? guitar[1].src: props.mode === "Drums" ? drums[1].src: piano[1].src}
              className="clip"
              id='W'
            />
          </button>
          <button
            className={
              props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad e"
            }
            id={props.mode === "Guitar" ? guitar[2].id: props.mode === "Drums" ? drums[2].id: piano[2].id}
            onClick={props.clickHandler}
          >
            E
            <audio
              src={props.mode === "Guitar" ? guitar[2].src: props.mode === "Drums" ? drums[2].src: piano[2].src}
              className="clip"
              id='E'
            />
          </button>
        </div>
        <div className="button-group">
          <button
            className={
              props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad a"
            }
            id={props.mode === "Guitar" ? guitar[3].id: props.mode === "Drums" ? drums[3].id: piano[3].id}
            onClick={props.clickHandler}
          >
            A
            <audio
              src={props.mode === "Guitar" ? guitar[3].src: props.mode === "Drums" ? drums[3].src: piano[3].src}
              className="clip"
              id='A'
            />
          </button>
          <button
            className={
             props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad s"
            }
            id={props.mode === "Guitar" ? guitar[4].id: props.mode === "Drums" ? drums[4].id: piano[4].id}
            onClick={props.clickHandler}
          >
            S
            <audio
              src={props.mode === "Guitar" ? guitar[4].src: props.mode === "Drums" ? drums[4].src: piano[4].src}
              className="clip"
              id='S'
            />
          </button>
          <button
            className={
             props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad d"
            }
            id={props.mode === "Guitar" ? guitar[5].id: props.mode === "Drums" ? drums[5].id: piano[5].id}
            onClick={props.clickHandler}
          >
            D
            <audio
              src={props.mode === "Guitar" ? guitar[5].src: props.mode === "Drums" ? drums[5].src: piano[5].src}
              className="clip"
              id='D'
            />
          </button>
        </div>
        <div className="button-group">
          <button
            className={
             props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad z"
            }
            id={props.mode === "Guitar" ? guitar[6].id: props.mode === "Drums" ? drums[6].id: piano[6].id}
            onClick={props.clickHandler}
          >
            Z
            <audio
              src={props.mode === "Guitar" ? guitar[6].src: props.mode === "Drums" ? drums[6].src: piano[6].src}
              className="clip"
              id='Z'
            />
          </button>
          <button
            className={
             props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad x"
            }
            id={props.mode === "Guitar" ? guitar[7].id: props.mode === "Drums" ? drums[7].id: piano[7].id}
            onClick={props.clickHandler}
          >
            X
            <audio
              src={props.mode === "Guitar" ? guitar[7].src: props.mode === "Drums" ? drums[7].src: piano[7].src}
              className="clip"
              id='X'
            />
          </button>
          <button
            className={
              props.power === "false"
                ? "btn drum-pad disabled"
                : "btn drum-pad c"
            }
            id={props.mode === "Guitar" ? guitar[8].id: props.mode === "Drums" ? drums[8].id: piano[8].id}
            onClick={props.clickHandler}
          >
            C
            <audio
              src={props.mode === "Guitar" ? guitar[8].src: props.mode === "Drums" ? drums[8].src: piano[8].src}
              className="clip"
              id='C'
            />
          </button>
        </div>
      </div>
    );
  }


export default KeyPad;
