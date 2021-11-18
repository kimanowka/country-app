import { Container } from "../components/Container";
import { Card } from "../components/Card";
import styled from "styled-components";
import { ContextApp } from "../Context";
import { useContext } from "react";

const CountryWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export const Main = () => {
  const { filteredCountry } = useContext(ContextApp);
  return (
    <Container>
      <CountryWrapper>
        {filteredCountry.map((item) => {
          return <Card key={item.name} item={item} />;
        })}
      </CountryWrapper>
    </Container>
  );
};
