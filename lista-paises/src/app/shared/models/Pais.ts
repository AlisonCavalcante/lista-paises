export interface Pais{
  name: {
    common: string;
  };
  borders: string[];
  capital: string[];
  currencies: {
    chave: string;
    idioma: string;
  }
  flags: {
    png: string;
    svg: string
  };
  languages: {
    chave: string;
  }
  population: number;
  region: string;
  subregion: string;
}
