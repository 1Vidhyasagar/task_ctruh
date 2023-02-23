import React, { useState } from "react";
import { CirclePicker } from "react-color";
import { Layer, Stage, Rect, Text } from "react-konva";

const Canvas = () => {
  const [number, setNumber] = useState("00");
  const colorOptions = [
    { label: "White", value: "#FFFFFF" },
    { label: "Black", value: "#000000" },
    { label: "Red", value: "#FF0000" },
    { label: "Green", value: "#00FF00" },
    { label: "Blue", value: "#0000FF" },
  ];
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].value);
  const [canvasWidth, setCanvasWidth] = useState(400);
  const [canvasHeight, setCanvasHeight] = useState(400);

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleColorOptionChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleCanvasWidthChange = (event) => {
    setCanvasWidth(event.target.value);
  };

  const handleCanvasHeightChange = (event) => {
    setCanvasHeight(event.target.value);
  };

  return (
    <div>
      <CirclePicker onChangeComplete={handleColorChange} />
      <input type="text" value={number} onChange={handleNumberChange} />
      <select value={selectedColor} onChange={handleColorOptionChange}>
        {colorOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>
        <label htmlFor="canvasWidth">Canvas Width: </label>
        <input
          type="number"
          id="canvasWidth"
          name="canvasWidth"
          value={canvasWidth}
          onChange={handleCanvasWidthChange}
        />
      </div>
      <div>
        <label htmlFor="canvasHeight">Canvas Height: </label>
        <input
          type="number"
          id="canvasHeight"
          name="canvasHeight"
          value={canvasHeight}
          onChange={handleCanvasHeightChange}
        />
      </div>
      <Stage width={canvasWidth} height={canvasHeight}>
        <Layer>
          <Rect
            width={canvasWidth}
            height={canvasHeight}
            fill={selectedColor}
          />
          <Text
            text={number}
            fontSize={150}
            fontFamily="Helvetica"
            fill="#000000"
            x={canvasWidth / 2 - 75}
            y={canvasHeight / 2 - 75}
            draggable
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
