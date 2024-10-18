const url = "http://api.weatherapi.com/v1/current.json?key=c6476c7841b94c82bf580310241810"
export const getWeatherDataByCity = async (city) => {
    const data = await fetch(`${url}&q=${city}`)
    return await data.json();
}

export const getWeatherDataByCoordinates = async (lat,lon) => {
    const data = await fetch(`${url}&q=${lat},${lon}`)
    return await data.json();
}