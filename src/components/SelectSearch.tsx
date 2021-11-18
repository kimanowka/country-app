import styled from "styled-components";
import { ContextApp } from "../Context";
import { useContext } from "react";

const SelectSearchEl = styled.select``;

const option = [
  { value: "", name: "Выберите регион для отбора" },
  { value: "Asia", name: "Asia" },
  { value: "Americas", name: "Americas" },
  { value: "Europe", name: "Europe" },
  { value: "Oceania", name: "Oceania" },
  { value: "Africa", name: "Africa" },
  { value: "Polar", name: "Polar" },
];
export const SelectSearch = () => {
  const { handleChangeSelect } = useContext(ContextApp);
  return (
    <SelectSearchEl
      onChange={(e) => {
        handleChangeSelect(e.target.value);
      }}
    >
      {option.map((item, index) => {
        return (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        );
      })}
    </SelectSearchEl>
  );
};
