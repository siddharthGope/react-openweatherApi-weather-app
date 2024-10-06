import "./App.scss";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";

function App() {
  return (
    <div className=" text-white mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TempAndDetails />
      <Forecast />
      <Forecast />
    </div>
  );
}
export default App;
