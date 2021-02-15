import axios from "axios";

const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
const apikey = "8947e02550db9599f8b777818e98832e";

export const getWeatherData = async (cityname) => {
  try {
    const { data } = await axios.get(baseURL + `q=${cityname}&APPID=${apikey}`);

    return data;
  } catch (err) {
    throw err;
  }
};
