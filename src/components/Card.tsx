import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Country } from "../types";

const CardWrapper = styled.div``;
const CardFlag = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const CardDescr = styled.div``;
const CardPopulation = styled.div`
  & > span {
    font-weight: var(--fw-bold);
  }
`;
const CardCapital = styled.div`
  & > span {
    font-weight: var(--fw-bold);
  }
`;
const CardRegion = styled.div`
  & > span {
    font-weight: var(--fw-bold);
  }
`;
const CardName = styled.div`
  & > span {
    font-weight: var(--fw-bold);
  }
`;
interface CardProps {
  item: Country;
}
export const Card = ({ item }: CardProps) => {
  const navigate = useNavigate();
  const handleClickOnCard = () => {
    navigate(`/${item.name}`);
  };
  return (
    <CardWrapper>
      <CardFlag src={item.flags.png} onClick={handleClickOnCard} />
      <CardDescr>
        <CardName>
          <span>Название страны:</span> {item.name}
        </CardName>
        <CardCapital>
          <span>Столица:</span> {item.capital}
        </CardCapital>
        <CardPopulation>
          <span>Население:</span> {item.population}
        </CardPopulation>
        <CardRegion>
          <span>Регион:</span> {item.region}
        </CardRegion>
      </CardDescr>
    </CardWrapper>
  );
};
