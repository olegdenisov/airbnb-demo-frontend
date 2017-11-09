import React from "react";
import styled from "styled-components";

const Card = styled.a`
  grid-column: span 3;
  text-decoration: none;
  color: inherit;
`;

const Fig = styled.figure`margin-bottom: 10px;`;

const Type = styled.p`
  margin-bottom: 4px;
  font-size: 10px;
  font-weight: bold;
  line-height: 1.2;
`;

const About = styled.div`
  margin: 0 0 3px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.166667;
`;

const Price = styled.p`margin-bottom: 0;`;

const Name = styled.h3`
  margin: 0 0 5px;
  font-weight: bold;
  font-size: inherit;
`;

export default props => {
  return (
    <Card href={props.href}>
      <Fig>
        <img src={props.img} alt={props.name} />
      </Fig>
      <About>
        <Type>{props.type}</Type>
        <Name>{props.name}</Name>
        <Price>About ${props.price} per person</Price>
      </About>
    </Card>
  );
};
