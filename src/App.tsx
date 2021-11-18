import axios from "axios";
import { useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { CardItem } from "./components/CardItem";
import { Layout } from "./components/Layout";
import { ContextApp } from "./Context";
import { Main } from "./pages/Main";
export const App = (): JSX.Element => {
  const { setCountry } = useContext(ContextApp);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,population,region"
      )
      .then(({ data }) => {
        setCountry(data);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/:name" element={<CardItem />} />
        </Route>
      </Routes>
    </>
  );
};
