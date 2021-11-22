import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Sortheader = () => {
  const arrowForward = (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.67969 1.60547C6.32812 1.95703 6.36328 2.48438 6.67969 2.83594L10.9336 6.84375H0.84375C0.351562 6.84375 0 7.23047 0 7.6875V8.8125C0 9.30469 0.351562 9.65625 0.84375 9.65625H10.9336L6.67969 13.6992C6.36328 14.0508 6.36328 14.5781 6.67969 14.9297L7.45312 15.7031C7.80469 16.0195 8.33203 16.0195 8.64844 15.7031L15.5039 8.84766C15.8203 8.53125 15.8203 8.00391 15.5039 7.65234L8.64844 0.832031C8.33203 0.515625 7.80469 0.515625 7.45312 0.832031L6.67969 1.60547Z"
        fill="currentColor"
      />
    </svg>
  );
  return (
    <>
      <div className="flex">
        <p className="slider-label">Speed</p>
        <input type="range" className="slider" max="100" />
      </div>
      <div className="flex">
        <p className="slider-label">Size</p>
        <input type="range" className="slider" max="100" />
      </div>
      <Button>Generate new Array</Button>
      <select id="select-sorting-method">
        <option value="merge">Merge Sort</option>
        <option value="bubble">Bubble Sort</option>
        <option value="insertion">Insertion Sort</option>
        <option value="quick">Quick Sort</option>
      </select>
      <Link className="flex" to="/path-finder">
        <p style={{ marginRight: 15 }}>Path Finding Algos</p> {arrowForward}
      </Link>
    </>
  );
};

export default Sortheader;