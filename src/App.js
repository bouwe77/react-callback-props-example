/* eslint-disable jsx-a11y/accessible-emoji */
import { useState } from "react";
import "./styles.css";

const photos = [
  "https://picsum.photos/id/213/300",
  "https://picsum.photos/id/622/300",
  "https://picsum.photos/id/134/300",
  "https://picsum.photos/id/88/300"
];

export default function App() {
  return (
    <>
      <Number />
      <Photos />
    </>
  );
}

function Photos() {
  const [photoIndex, setLetterIndex] = useState(0);
  const photo = photos[photoIndex];

  function getPrevPhoto() {
    const newLetterIndex =
      photoIndex === 0 ? photos.length - 1 : photoIndex - 1;
    setLetterIndex(newLetterIndex);
  }

  function getNextPhoto() {
    const newLetterIndex =
      photoIndex === photos.length - 1 ? 0 : photoIndex + 1;
    setLetterIndex(newLetterIndex);
  }

  return (
    <div className="container">
      <div className="box" style={{ width: "400px" }}>
        <img alt={photo} src={photo} />
        <LeftRightArrowButtons
          onLeftClick={getPrevPhoto}
          onRightClick={getNextPhoto}
        />
      </div>
    </div>
  );
}

function Number() {
  const [number, setNumber] = useState(0);
  return (
    <div className="container">
      <div className="box">{number}</div>
      <LeftRightArrowButtons
        onLeftClick={() => setNumber(number - 1)}
        onRightClick={() => setNumber(number + 1)}
      />
    </div>
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
