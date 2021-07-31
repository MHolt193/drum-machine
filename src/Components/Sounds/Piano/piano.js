import ff from "./ff-014.mp3";
import miE from "./mi-e.mp3";
import doC from "./do-c.mp3";
import faF from "./fa-f.mp3";
import laA from "./la-a.mp3";
import octaveDoC from "./octave-do-c.mp3";
import reD from "./re-d.mp3";
import siB from "./si-b.mp3";
import solG from "./sol-g.mp3";

const piano = [
  {
    id: "Piano FF",
    keyCode: 81,
    src: ff,
    keyTrigger: "Q",
  },
  {
    id: "Mi-E",
    keyCode: 87,
    src: miE,
    keyTrigger: "W",
  },
  {
    id: "Do-C",
    keyCode: 69,
    src: doC,
    keyTrigger: "E",
  },
  {
    id: "Fa-F",
    keyCode: 65,
    src: faF,
    keyTrigger: "A",
  },
  {
    id: "La-A",
    keyCode: 83,
    src: laA,
    keyTrigger: "S",
  },
  {
    id: "Octave Do-C",
    keyCode: 68,
    src: octaveDoC,
    keyTrigger: "D",
  },
  {
    id: "Re-D",
    keyCode: 90,
    src: reD,
    keyTrigger: "Z",
  },
  {
    id: "Si-B",
    keyCode: 88,
    src: siB,
    keyTrigger: "X",
  },
  {
    id: "Sol-G",
    keyCode: 67,
    src: solG,
    keyTrigger: "C",
  },
];
export default piano;
