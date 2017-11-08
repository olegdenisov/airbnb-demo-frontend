import React from "react";
import styled from "styled-components";

const Card = styled.a`
  grid-column: span 4;
  overflow: hidden;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(72, 72, 72, 0.2),
    0 2px 4px rgba(72, 72, 72, 0.08);
`;

const CardFig = styled.figure``;

const CardAbout = styled.h3`
  margin: 0;
  padding: 0 25px;
  flex-grow: 1;
  margin-bottom: 3px;
`;

export default props => {
  return (
    <Card href={props.to}>
      <CardFig>
        <img src={props.img} alt={props.name} />
      </CardFig>
      <CardAbout>{props.name}</CardAbout>
    </Card>
  );
};