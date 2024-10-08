import './dailyWeather.css';
import { useAppSelector } from "../../utils/customHooks";
import { WeatherItem } from '../../utils/globalTypes';
import DailyCard from '../dailyCard/DailyCard';

const DailyWeather = () => {
    const { weatherList, selectedUnitLabel: unitLabel } = useAppSelector(state => state.weather);

    const dailtyWeatherData = weatherList.reduce((result, weather) => {
        const currentDate = weather.dt_txt.split(' ')[0];
        result[currentDate] ||= [];

        result[currentDate].push(weather);
        
        return result;
    }, {} as { [key: string]: WeatherItem[] });

    return (
        <div className='dailyWeather'>
            {
                Object.keys(dailtyWeatherData).length ? (
                    Object.keys(dailtyWeatherData).map((date) => (
                        <DailyCard
                            key={date}
                            date={date}
                            weatherDailyData={dailtyWeatherData[date]}
                            unitLabel={unitLabel}
                        />
                    ))
                ) : null
            }
        </div>
    )
}

export default DailyWeather