import { FC } from 'react'
import './dailyCard.css';
import { WeatherItem } from '../../utils/globalTypes';
import { getTemp } from '../../utils/usefulFuncs';
import { Link } from 'react-router-dom';
import WeatherIcon from '../weatherIcon/WeatherIcon';

type DailyCardProps = {
    date: string;
    weatherDailyData: WeatherItem[];
    unitLabel: string;
}

const DailyCard: FC<DailyCardProps> = ({ date, weatherDailyData, unitLabel }) => {
    const averageIndex = Math.floor(weatherDailyData.length / 2);
    const averageWeatherData = weatherDailyData[averageIndex];

    return (
        <Link
            to={`/${date}`}
            className='dailyCard'
        >
            <p>{date.slice(5)}</p>
            <div className='dailyCard_result'>
                <h3>{getTemp(averageWeatherData.main.temp, unitLabel)}</h3>
                <WeatherIcon icon={averageWeatherData.weather[0].icon} />
            </div>
        </Link>
    )
}

export default DailyCard