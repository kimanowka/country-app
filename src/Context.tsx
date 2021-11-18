import React, { useCallback, useState } from "react";
import { Country } from "./types";

interface Props {
  children: React.ReactNode;
}
interface ContextProps {
  filteredCountry: Country[];
  setCountry: React.Dispatch<React.SetStateAction<Country[]>>;
  searchCountry: string;
  setSearchCountry: React.Dispatch<React.SetStateAction<string>>;
  handleSearchCountry: (item: string) => void;
  handleChangeSelect: (item: string) => void;
  searchSelectRegion: string;
  handleSearch: (country: string, region: string) => void;
}
export const ContextApp = React.createContext<ContextProps>({
  filteredCountry: [],
  setCountry: () => {},
  searchCountry: "",
  setSearchCountry: () => {},
  handleSearchCountry: () => {},
  handleChangeSelect: () => {},
  searchSelectRegion: "",
  handleSearch: () => {},
});

export const ContextProvider = ({ children }: Props) => {
  const [country, setCountry] = useState<Country[]>([]);
  const [searchCountry, setSearchCountry] = useState<string>("");
  const [searchSelectRegion, setSearchSelectRegion] = useState<string>("");
  const [filteredCountry, setFilteredCountry] = useState<Country[]>(country);
  const handleSearchCountry = (item: string) => {
    setSearchCountry(item.toLowerCase());
  };
  const handleChangeSelect = (item: string) => {
    setSearchSelectRegion(item);
  };
  const handleSearch = useCallback(
    (countrySearch: string, regionSearch: string) => {
      let countryFilter = country;

      if (regionSearch) {
        countryFilter = countryFilter.filter((item) =>
          item.region.toLowerCase().includes(regionSearch.toLowerCase())
        );
      }
      if (countrySearch) {
        countryFilter = countryFilter.filter((item) =>
          item.name.toLowerCase().includes(countrySearch.toLowerCase())
        );
      }
      setFilteredCountry(countryFilter);
    },
    [country]
  );

  return (
    <ContextApp.Provider
      value={{
        filteredCountry,
        setCountry,
        searchCountry,
        setSearchCountry,
        handleSearchCountry,
        handleChangeSelect,
        searchSelectRegion,
        handleSearch,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
