import pluck from "./guitarpluking.mp3";
import mellowOne from "./mellow-guitar-chord-1.mp3";
import mellowTwo from "./mellow-guitar-chord-2.mp3";
import mellowThree from "./mellow-guitar-chord-3.mp3";
import pluckTwo from "./plucking-guitar.mp3";
import guitarLick from "./straight-up-guitarlick-9.mp3";
import stringSlip from "./stringslip.mp3";
import twangyBendy from "./twangybendy.mp3";
import wahDown from "./wah-down.mp3";

const guitar = [
  {
    id: "Pluck",
    keyCode: 81,
    src: pluck,
    keyTrigger: "Q",
  },
  {
    id: "Mellow-1",
    keyCode: 87,
    src: mellowOne,
    keyTrigger: "W",
  },
  {
    id: "Mellow-2",
    keyCode: 69,
    src: mellowTwo,
    keyTrigger: "E",
  },
  {
    id: "Mellow-3",
    keyCode: 65,
    src: mellowThree,
    keyTrigger: "A",
  },
  {
    id: "Pluck-2",
    keyCode: 83,
    src: pluckTwo,
    keyTrigger: "S",
  },
  {
    id: "Guitar-Lick",
    keyCode: 68,
    src: guitarLick,
    keyTrigger: "D",
  },
  {
    id: "String-Slip",
    keyCode: 90,
    src: stringSlip,
    keyTrigger: "Z",
  },
  {
    id: "Twangy-Bendy",
    keyCode: 88,
    src: twangyBendy,
    keyTrigger: "X",
  },
  {
    id: "Wah-Down",
    keyCode: 67,
    src: wahDown,
    keyTrigger: "C",
  },
];
export default guitar;
