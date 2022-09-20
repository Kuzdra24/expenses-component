import React from "react";
import {
  Subtitle,
  ColumnWrapper,
} from "./Column.styles";

export const Column = (props) => {
  <ColumnWrapper>
  {console.log(props)}
    <Subtitle>{props.day}</Subtitle>
    {/* <Height amount={props.amount} biggestValue={props.biggestValue} /> */}
  </ColumnWrapper>;
};
