import { FC } from 'react'
import './hourlyWeather.css';

import WeatherIcon from '../weatherIcon/WeatherIcon';
import { getTemp } from '../../utils/usefulFuncs';
import { WeatherItem } from '../../utils/globalTypes'

type HourlyWeatherProps = {
    weatherHourlyData: WeatherItem[];
    unitLabel: string;
}

const HourlyWeather: FC<HourlyWeatherProps> = ({ weatherHourlyData, unitLabel }) => {
    return (
        <div className='hourlyWeather'>
            {
                weatherHourlyData.map((hourData) => (
                    <div className='hourly_row' key={hourData.dt}>
                        <p>{hourData.dt_txt}</p>
                        <p>{getTemp(hourData.main.temp, unitLabel)}</p>
                        <WeatherIcon icon={hourData.weather[0].icon} />
                    </div>
                ))
            }
        </div>
    )
}

export default HourlyWeather