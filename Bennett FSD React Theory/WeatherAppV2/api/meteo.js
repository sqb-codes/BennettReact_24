import axios from "axios";

export class MeteoAPI {
    static async fetchWeather(coords) {
        return (
            await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
        ).data;
    }

    static async fetchCityByCoords(coords) {
        const 
            {address : {city, village, town},
        } = (
            await axios.get()
        ).data;
        return city || village || town;
    }
}