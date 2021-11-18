import { SelectSearch } from "./SelectSearch";
import { InputSearch } from "./InputSearch";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { ContextApp } from "../Context";

const WrapperSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Search = () => {
  const { searchCountry, searchSelectRegion, handleSearch } =
    useContext(ContextApp);

  useEffect(() => {
    handleSearch(searchCountry, searchSelectRegion);
  }, [handleSearch, searchCountry, searchSelectRegion]);

  return (
    <WrapperSearch>
      <SelectSearch></SelectSearch>
      <InputSearch></InputSearch>
    </WrapperSearch>
  );
};
