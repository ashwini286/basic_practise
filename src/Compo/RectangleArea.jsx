import React from 'react';

function RectangleAreaCalculator({ strArr }) {
  const calculateRectangleArea = (strArr) => {
    // Parse the input strings to extract x and y coordinates
    const points = strArr.map((str) => {
      const match = str.match(/\((\d+) (\d+)\)/);
      if (match) {
        return { x: parseInt(match[1]), y: parseInt(match[2]) };
      }
      return null;
    });

    // Find the minimum and maximum x and y coordinates
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    points.forEach((point) => {
      if (point) {
        minX = Math.min(minX, point.x);
        minY = Math.min(minY, point.y);
        maxX = Math.max(maxX, point.x);
        maxY = Math.max(maxY, point.y);
      }
    });

    // Calculate width and height
    const width = maxX - minX;
    const height = maxY - minY;

    // Calculate the area
    const area = width * height;

    return area;
  };

  const area = calculateRectangleArea(strArr);

  return (
    <div>
      <p>Input Array: {strArr.join(", ")}</p>
      <p>Rectangle Area: {area}</p>
    </div>
  );
}

export default RectangleAreaCalculator;
