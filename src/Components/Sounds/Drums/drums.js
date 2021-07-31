import acousticSnare from "./acoustic_snare.mp3";
import actionKick from "./action-kick.mp3";
import ambientSnare from "./ambient_snare.mp3";
import aphex from "./aphexbd.mp3";
import bendUp from "./bendupohh.mp3";
import bright from "./brightchh.mp3";
import clapVerby from "./clapverby.mp3";
import crap from "./crapsd2.mp3";
import gong from "./dramatic-bong.mp3";

const drums = [
  {
    id: "Acoustic Snare",
    keyCode: 81,
    src: acousticSnare,
    keyTrigger: "Q",
  },
  {
    id: "Action Kick",
    keyCode: 87,
    src: actionKick,
    keyTrigger: "W",
  },
  {
    id: "Ambient Snare",
    keyCode: 69,
    src: ambientSnare,
    keyTrigger: "E",
  },
  {
    id: "Aphex",
    keyCode: 65,
    src: aphex,
    keyTrigger: "A",
  },
  {
    id: "Bend Up",
    keyCode: 83,
    src: bendUp,
    keyTrigger: "S",
  },
  {
    id: "Bright",
    keyCode: 68,
    src: bright,
    keyTrigger: "D",
  },
  {
    id: "Clap Verby",
    keyCode: 90,
    src: clapVerby,
    keyTrigger: "Z",
  },
  {
    id: "Clap",
    keyCode: 88,
    src: crap,
    keyTrigger: "X",
  },
  {
    id: "Gong",
    keyCode: 67,
    src: gong,
    keyTrigger: "C",
  },
];

export default drums;
