import "./KeyPad.css";
const KeyPad = (props) => {
  return (
    <div className="container keypad">
      <div className="button-group">
        <div className="btn drum-pad" id="sound1">
            <p>{guitar[0].keyTrigger}</p>
          <audio src={guitar[0].src} className="clip" id={guitar[0].keyTrigger} />
        </div>
        <div className="btn drum-pad" id="sound2">
          W
        </div>
        <div className="btn drum-pad" id="sound3">
          E
        </div>
      </div>
      <div className="button-group">
        <div className="btn drum-pad" id="sound4">
          A
        </div>
        <div className="btn drum-pad" id="sound5">
          S
        </div>
        <div className="btn drum-pad" id="sound6">
          D
        </div>
      </div>
      <div className="button-group">
        <div className="btn drum-pad" id="sound7">
          Z
        </div>
        <div className="btn drum-pad" id="sound8">
          X
        </div>
        <div className="btn drum-pad" id="sound9">
          C
        </div>
      </div>
    </div>
  );
};
const guitar = [
  {
    id: "Note A",
    keyCode: 81,
    src: "https://d9olupt5igjta.cloudfront.net/samples/sample_files/79885/fc867f8591613e5e826585edd8b74103f10444ed/mp3/_6-la1_flamenco_apoiado_forte_corda5.mp3",
    keyTrigger: "Q",
  },
];

export default KeyPad;
