import "./App.css";
// import { DatePicker } from "npm-package-dummy";
import { DatePicker } from "@vj97/react-date-picker";

import "@vj97/react-date-picker/dist/style.css";

function App() {
  return (
    <div className="App">
      <div>
        <h2>React Date Picker Demo</h2>

        <h5>Instalation</h5>
        <p>npm i @vj97/react-date-picker</p>

        <p className="heading">Single Date Selection</p>
        <DatePicker
          containerStyle={{ width: "325px" }}
          placeholder="Select date"
          selectionType="single"
          dateFormat="YY MM"
          viewFormat="YYYY MMM DD"
        />
        <p className="heading">Date Range Selection (Absolute)</p>
        <DatePicker
          containerStyle={{ width: "325px" }}
          placeholder="Select date"
          selectionType="range"
                 dateFormat="YY MM"
          viewFormat="YYYY MMM DD"
        />
        <p className="heading">Date Range Selection (Relative)</p>
        <DatePicker
          containerStyle={{ width: "325px" }}
          placeholder="Select date"
          selectionType="range"
          defaultPickerType="relative"
        />
      </div>
    </div>
  );
}

export default App;
