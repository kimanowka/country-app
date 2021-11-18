import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountryItem } from "../types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const WrapperCardItem = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardItemFlag = styled.img`
  display: block;
  widht: 200px;
  height: 200px;
`;
const CardItemDescr = styled.div``;
const CardItemCapital = styled.div``;
const CardItemPopulation = styled.div``;
const CardItemArea = styled.div``;
const CardItemBordersWrapper = styled.div`
  display: flex;
`;

const CardItemBorders = styled.div`
  border: 1px solid black;
  cursor: pointer;
  margin-right: 5px;
  padding: 3px;
`;
const CardItemLanguageWrapper = styled.div`
  display: flex;
`;

const CardItemLanguage = styled.div`
  border: 1px solid black;
  margin-right: 5px;
  padding: 3px;
`;
const CardItemAlpha = styled.div``;

export const CardItem = () => {
  const [country, setCountry] = useState<CountryItem>();
  const { name } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v2/name/${name}?fields=name,capital,flags,population,region,area,borders,languages,alpha3Code`
      )
      .then(({ data }) => {
        setCountry(data[0]);
      });
  }, [name]);

  const handleClickOnCardItem = (item: string) => {
    axios
      .get(`https://restcountries.com/v2/alpha?codes=${item}`)
      .then(({ data }) => {
        navigate(`/${data[0].name}`);
      });
  };
  return (
    <WrapperCardItem>
      <h1>{country?.name}</h1>
      <CardItemFlag src={country?.flags.svg}></CardItemFlag>
      <CardItemDescr>
        <CardItemCapital>Cтолица: {country?.capital}</CardItemCapital>
        <CardItemPopulation>
          Население: {country?.population} чел.
        </CardItemPopulation>
        <CardItemArea>Площадь: {country?.area} кв.км</CardItemArea>
        <CardItemBordersWrapper>
          Границы:
          {country?.borders.map((item) => (
            <CardItemBorders
              key={item}
              onClick={() => {
                handleClickOnCardItem(item);
              }}
            >
              {item}
            </CardItemBorders>
          ))}
        </CardItemBordersWrapper>
        <CardItemLanguageWrapper>
          Языки:
          {country?.languages.map((item: { name: any; nativeName: any }) => (
            <CardItemLanguage key={item.nativeName}>
              {item.name}: {item.nativeName}
            </CardItemLanguage>
          ))}
        </CardItemLanguageWrapper>

        <CardItemAlpha>Краткое название: {country?.alpha3Code}</CardItemAlpha>
      </CardItemDescr>
    </WrapperCardItem>
  );
};
