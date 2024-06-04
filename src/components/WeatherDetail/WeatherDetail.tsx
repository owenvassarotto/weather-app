import { Weather } from "../../types"
import { convertKevinToCelsius } from "../../utils"
import style from "./WeatherDetail.module.css";

type WeatherDetailProps = {
    weather: Weather,
}

export default function WeatherDetail({ weather } : WeatherDetailProps) {
  return (
    <div className={style.container}>
        <h2>Clima de: {weather.name}</h2>
        <p className={style.current}>{convertKevinToCelsius(weather.main.temp)}&deg;C</p>
        <div className={style.temperatures}>
            <p>Min: <span>{convertKevinToCelsius(weather.main.temp_min)}&deg;C</span></p>
            <p>Max: <span>{convertKevinToCelsius(weather.main.temp_max)}&deg;C</span></p>
        </div>
    </div>
  )
}
