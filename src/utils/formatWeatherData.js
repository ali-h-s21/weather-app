import { fromUnixTime, format } from "date-fns";

// Convert Time From [166464...] To => for example [10:30 AM,  or 10 AM]
function fromUnixToHours(date, includeMinutes) {
  return format(fromUnixTime(date), `h${includeMinutes ? ":mm" : ""} aa`);
}

// convert Time from [165454...] To => for example [Sunday,Monday...]
function fromUnixToweekDays(date) {
  return format(fromUnixTime(date), "EEEE");
}
function fromMeterToKm(m) {
  return parseFloat(m * 3.6).toFixed(2);
}

export function fromattTodayWeather(data, coord, units) {
  return {
    main: {
      cityName: coord[0].name,
      country: coord[0].country,
      temp: Math.round(data.temp),
      icon: data.weather[0].icon,
      condition: data.weather[0].main,
    },
    details: {
      feels_like: `${Math.round(data.feels_like)} °`,
      description: data.weather[0].description,
      wind: `${
        units === "imperial"
          ? `${data.wind_speed} miles/h`
          : `${fromMeterToKm(data.wind_speed)} km/h`
      }`,
      humidity: `${data.humidity}%`,
      pressure: `${data.pressure} hPa`,
      visibility: `${data.visibility / 1000} km`,
      sunrise: fromUnixToHours(data.sunrise, true),
      sunset: fromUnixToHours(data.sunset, true),
    },
  };
}

export function formattHourlyForecast(hourlyData) {
  const hourlyDataList = hourlyData.slice(0, 24); // getting only the next 24 hour forecast .
  const formattedHourlyData = hourlyDataList.map((item) => {
    return {
      temp: Math.round(item.temp),
      time: fromUnixToHours(item.dt),
      icon: item.weather[0].icon,
    };
  });

  formattedHourlyData[0].time = "Now"; //first object is the current hour

  return formattedHourlyData;
}

export function formattDailyForecast(dailyForecast) {
  return dailyForecast.map((item) => ({
    day: fromUnixToweekDays(item.dt),
    icon: item.weather[0].icon,
    max_temp: Math.round(item.temp.max),
    min_temp: Math.round(item.temp.min),
  }));
}
