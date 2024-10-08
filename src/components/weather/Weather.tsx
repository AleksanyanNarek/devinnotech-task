import './weather.css';

import CurrentWeather from '../currentWeather/CurrentWeather';
import DailyWeather from '../dailyWeather/DailyWeather';

const Weather = () => {

    return (
        <section className='weather'>
            <CurrentWeather />
            <DailyWeather />
        </section>
    )
}

export default Weather