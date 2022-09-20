import React, { useState } from "react";
import {
  Subtitle,
  ColumnWrapper,
  Column as Height,
  AmountInfo,
} from "./Column.styles";

export const Column = ({day, amount, biggestValue}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
    console.log(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    console.log(false);
  };
  return (
    <ColumnWrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Subtitle>{day}</Subtitle>
      <Height amount={amount} biggestValue={biggestValue} isHovering={isHovering}/>
      {isHovering && <AmountInfo>${amount}</AmountInfo>}
    </ColumnWrapper>
  );
};
