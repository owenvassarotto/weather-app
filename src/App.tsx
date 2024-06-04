import styles from "./App.module.css"; // -> styled components
import Alert from "./components/Alert/Alert";
import Form from "./components/Form/Form";
import Spinner from "./components/Spinner/Spinner";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {
  const { loading, weather, hasWeatherData, fetchWeather, notFound } = useWeather();

  return (
    <>
      <h1 
        className={styles.title}
      >
        ClimAPP
        <img src="/Weather-icon.png" alt="icono clima" />
      </h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />

        {hasWeatherData ? (
          <WeatherDetail weather={weather} />
        ) : loading ? (
          <Spinner />
        ) : notFound ? (
          <Alert>Ciudad no encontrada</Alert>
        ): (
          <h2>Realiza una busqueda y visualiza el clima. ⛅</h2>
        )}
      </div>
    </>
  );
}

export default App;
