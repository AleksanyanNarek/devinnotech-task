import { FC } from "react"

type WeatherIconProps = {
    icon: string;
}

const WeatherIcon: FC<WeatherIconProps> = ({ icon }) => {
    return (
        <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="" />
    )
}

export default WeatherIcon