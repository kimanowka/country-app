export interface Country {
  capital: string;
  flags: { svg: string; png: string };
  population: number;
  region: string;
  name: string;
}

export interface CountryItem {
  name: string;
  region: String;
  area: number;
  capital: string;
  borders: string[];
  population: number;
  flags: { svg: string; png: string };
  languages: any;
  alpha3Code: string;
}
