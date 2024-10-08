import { useEffect, useState } from 'react';
import './header.css';
import { useAppDispatch, useDebounce } from '../../utils/customHooks';
import { changeUnit, getWeatherListThunk } from '../../store/weatherSlice';

import { Units } from '../../utils/globalTypes';

const unitLabels = {
    [Units.c]: '°C',
    [Units.f]: '°F',
}

const Header = () => {
    const dispatch = useAppDispatch();

    const [cityName, setCityName] = useState('Yerevan');
    const [unit, setUnit] = useState<Units>(Units.c);

    useEffect(() => {
        getWeatherList(cityName, unit);
    }, []);

    const getWeatherList = async (cityName: string, unit: Units) => {
        dispatch(getWeatherListThunk({
            city: cityName,
            unit
        }));
        dispatch(changeUnit(unitLabels[unit]));
    };

    const debouncedGetWeather = useDebounce(getWeatherList, 500);

    const changeCityName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setCityName(value);
        debouncedGetWeather(value, unit);
    };

    const changeUnits = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newUnit = event.target.value as Units;

        setUnit(newUnit);
        getWeatherList(cityName, newUnit);
    };

    return (
        <header className='header'>
            <form className='header_form'>
                <input
                    name='city_name'
                    value={cityName}
                    onChange={changeCityName}
                />
            </form>
            <div className='units'>
                <label className='units_label'>
                    <input
                        type="radio"
                        name="units"
                        value={ Units.c }
                        checked={ unit === Units.c }
                        onChange={changeUnits}
                    />
                    <p>{unitLabels[Units.c]}</p>
                </label>
                <label className='units_label'>
                    <input
                        type="radio"
                        name="units"
                        value={Units.f}
                        checked={ unit === Units.f }
                        onChange={changeUnits}
                    />
                    <p>{unitLabels[Units.f]}</p>
                </label>
            </div>
        </header>
    )
}

export default Header