import axios from "axios";

const API_KEY = '967dd0b59c648291b706d8f98adfbf89';

const $host = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

export const getWeatherListQuery = async (city: string, unit: string) => {
    const { data } = await $host.get(`forecast?q=${city}&appid=${API_KEY}&units=${unit}`);

    return data;
}