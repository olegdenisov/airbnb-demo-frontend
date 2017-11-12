import React from "react";
import styled from "styled-components";
import Section from "../Section";
import Inner from "../Inner";
import Title from "../Title";
import Card from "./Card";
import Track from "../Track";
import tile from "./tile";

const CardWrap = styled.div`
  padding: 0 8px 30px;
  width: 33.3333%;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 980px) {
    padding-bottom: 0;
    width: 16.6666%;
    flex-shrink: 0;
    flex-grow: 1;
  }
`;

export default () => {
  return (
    <Section>
      <Inner>
        <Title>Featured destinations</Title>
      </Inner>
      <Inner>
        <Track hasPager>
          <CardWrap>
            <Card img={tile.paris} name="Paris" href="" />
          </CardWrap>
          <CardWrap>
            <Card img={tile.miami} name="Miami" href="" />
          </CardWrap>
          <CardWrap>
            <Card img={tile.tokio} name="Tokyo" href="" />
          </CardWrap>
          <CardWrap>
            <Card img={tile.capetown} name="Cape Town" href="" />
          </CardWrap>
          <CardWrap>
            <Card img={tile.seoul} name="Seoul" href="" />
          </CardWrap>
          <CardWrap>
            <Card img={tile.losangeles} name="Los Angeles" href="" />
          </CardWrap>
        </Track>
      </Inner>
    </Section>
  );
};
