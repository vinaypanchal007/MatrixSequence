import React, { useState } from "react";
import "./Matrix.css";

const Matrix = () => {
  const [box, setBox] = useState(Array(9).fill(null));
  const [click, setClick] = useState([]);

  const handleClick = (index) => {
    if (click.length === 9) return;

    const newStates = [...box];
    newStates[index] = "green";
    setBox(newStates);
    console.log(newStates); //shows green in the array at the index of the particular box clicked

    const newOrder = [...click, index];
    setClick(newOrder);
    console.log(newOrder);  //contains the order of clicks like [0,3,5,1,6,2,4,8,7]

    if (newOrder.length === 9) {
      sequenceChangeColor(newOrder); //this passes the order of clicks to the function sequenceChangeColor
    }
  };

  const sequenceChangeColor = (order) => {
    let i = 0;
    setInterval(() => {
      const newStates = [...Array(9).fill(null)];
      for (let j = 0; j <= i; j++) {
        newStates[order[j]] = "orange"; //this will change the color of the boxes according to the order of clicks passed to it
      }
      setBox(newStates);
      i++;
    }, 500); //changes the color of the boxes after every 500ms
  };

  return (
    <div className="matrix">
      {box.map((color, index) => ( //maps through the array of boxes and displays them
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color}}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;
