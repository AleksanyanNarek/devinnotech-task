import { FC } from "react"
import './mainWeather.css';

import WeatherIcon from "../weatherIcon/WeatherIcon";
import { WeatherItem } from "../../utils/globalTypes"
import { getTemp } from "../../utils/usefulFuncs";

type MainWeatherProps = {
    mainWeatherData: WeatherItem;
    cityName: string;
    unitLabel: string;
}

const MainWeather: FC<MainWeatherProps> = ({ mainWeatherData, cityName, unitLabel }) => {

    return (
        <div className='mainWeather'>
            <h2>{cityName}</h2>
            <h1>{getTemp(mainWeatherData.main.temp, unitLabel)}</h1>
            <WeatherIcon icon={mainWeatherData.weather[0].icon} />
            <p>{mainWeatherData.weather[0].main}</p>
        </div>
    )
}

export default MainWeather