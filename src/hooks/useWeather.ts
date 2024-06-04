import axios from "axios";
import { z } from "zod";
import { SearchType } from "../types";
import { useMemo, useState } from "react";

// Zod
// definir estructura
const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),
    })
})

type Weather = z.infer<typeof Weather>

const initialState = {
    name: '',
    main: {
        temp: 0,
        temp_max: 0,
        temp_min: 0,
    }
}

export default function useWeather() {

    const [weather, setWeather] = useState<Weather>(initialState);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const fetchWeather = async (search: SearchType) => {
        setLoading(true);
        setWeather(initialState);
        try {
            const geoURl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${import.meta.env.VITE_API_KEY}`;

            const { data } = await axios(geoURl);

            // comprobar si existe
            if(!data[0]){
                setNotFound(true);
            }

            const lat = data[0].lat;            
            const lon = data[0].lon;

            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`;

            // zod
            const { data: weatherData } = await axios(weatherURL);
            const result = Weather.safeParse(weatherData); 
            if(result.success){
               setWeather(result.data);
            }

        } catch (error) {
            console.error(error);
        } finally { // -> siempre se ejecuta independientemente si entra en el try o el catch
            setLoading(false);
        }
    }

    const hasWeatherData = useMemo(() => weather.name, [weather]);

  return {
    weather,
    loading,
    notFound,
    fetchWeather,
    hasWeatherData,
  }
}
