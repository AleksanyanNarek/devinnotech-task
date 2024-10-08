import { useEffect } from 'react';
import './currentWeather.css';
import { useNavigate, useParams } from 'react-router-dom';

import MainWeather from '../mainWeather/MainWeather';
import HourlyWeather from '../hourlyWeather/HourlyWeather';
import { getCurrentDate } from '../../utils/usefulFuncs';
import { useAppSelector } from '../../utils/customHooks';

const CurrentWeather = () => {
    const { selectedDate = '' } = useParams();
    const navigate = useNavigate();

    const { cityName, weatherList, selectedUnitLabel: unitLabel } = useAppSelector(state => state.weather);

    const currentWeatherData = weatherList.filter((weatherItem) => weatherItem.dt_txt.startsWith(selectedDate));

    useEffect(() => {
        if (weatherList.length && !currentWeatherData.length) {
            const currentDate = getCurrentDate();
            navigate(`/${currentDate}`);
        }
    }, [weatherList]);

    return (
        <div className='currentWeather'>
            {
                currentWeatherData.length ? (
                    <>
                        <MainWeather
                            mainWeatherData={currentWeatherData[0]}
                            cityName={cityName}
                            unitLabel={unitLabel}
                        />
                        <HourlyWeather
                            weatherHourlyData={currentWeatherData}
                            unitLabel={unitLabel}
                        />
                    </>
                ) : null
            }
        </div>
    )
}

export default CurrentWeather