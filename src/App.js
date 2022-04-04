import MainWeather from "./components/MainWeather";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faTemperatureHigh,
  faDroplet,
  faCloudShowersHeavy,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

library.add(fas, faTemperatureHigh, faDroplet, faCloudShowersHeavy, faWind);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainWeather />
      </header>
      <a className="ref" href="https://open-meteo.com/">
        Weather data by Open-Meteo.com
      </a>
    </div>
  );
}

export default App;
