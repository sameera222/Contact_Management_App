import axios from "axios";

export const fetchCountriesData = async () => {
    const response = await axios.get("https://disease.sh/v3/covid-19/countries");
    return response.data;
  };

 export  const fetchHistoricalData = async () => {
    const response = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
    return response.data.cases;
  };