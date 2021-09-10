import React from "react";
import Header from "./components/header";
import WeatherBody from "./components/weatherbody";
import WeatherHeader from "./components/weatherHeader/";
import { WeatherDataProvider } from "./components/data/weatherData";
import "./style/main.scss";

function App() {
  return (
    <>
      <WeatherDataProvider>
        <Header></Header>
        <WeatherHeader></WeatherHeader>
        <WeatherBody></WeatherBody>
      </WeatherDataProvider>
    </>
  );
}

export default App;
