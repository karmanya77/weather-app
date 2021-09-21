import { CurrentWeather } from "./current-weather";
import { Forecast } from "./five-day-forecast";
import { Navigation } from "./navigation";
export const API_KEY = "450c469db28a3c229bb707cd19d97f90";
export const CITY = "Orlando";
function App() {
  return (
    <div className="App">
      <Navigation />
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default App;
