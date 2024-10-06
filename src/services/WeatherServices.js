const API_KEY = "";
const BASE_URL = "api.openweathermap.org / data / 2.5 /";

const getWeatherdata = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  // [[searchParams],API_ID] = searchParams[0]=searchParams[0]&afxc35efcg
  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export default getWeatherdata;
