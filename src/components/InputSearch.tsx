import styled from "styled-components";
import { ContextApp } from "../Context";
import { useContext } from "react";

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Введите название страны",
})``;

export const InputSearch = () => {
  const { handleSearchCountry } = useContext(ContextApp);

  return (
    <Input
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target) {
          handleSearchCountry(e.target.value);
        }
      }}
    />
  );
};
