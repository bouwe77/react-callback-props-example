/* eslint-disable jsx-a11y/accessible-emoji */
import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Number />
      <Letter />
    </>
  );
}

function Letter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [letterIndex, setLetterIndex] = useState(0);
  const letter = alphabet[letterIndex];

  function getPrevLetter() {
    const newLetterIndex =
      letterIndex === 0 ? alphabet.length - 1 : letterIndex - 1;
    setLetterIndex(newLetterIndex);
  }

  function getNextLetter() {
    const newLetterIndex =
      letterIndex === alphabet.length - 1 ? 0 : letterIndex + 1;
    setLetterIndex(newLetterIndex);
  }

  return (
    <>
      <div className="box">{letter}</div>
      <LeftRightArrowButtons
        onLeftClick={getPrevLetter}
        onRightClick={getNextLetter}
      />
    </>
  );
}

function Number() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div className="box">{number}</div>
      <LeftRightArrowButtons
        onLeftClick={() => setNumber(number - 1)}
        onRightClick={() => setNumber(number + 1)}
      />
    </>
  );
}

function LeftRightArrowButtons({ onLeftClick, onRightClick }) {
  return (
    <>
      <button onClick={onLeftClick}>◀️</button>
      <button onClick={onRightClick}>▶️</button>
    </>
  );
}
