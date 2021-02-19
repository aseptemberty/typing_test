import './App.css'
import ExerciseText from "./components/ExerciseText/ExerciseText";
import {Provider} from "react-redux";
import {store} from './context/store'
import HiddenInput from "./components/HiddenInput/HiddenInput";
import {inputFocus} from "./context/actions/inputFocus";

function App() {
  return (
    <Provider store={store}>
      <div className="App"
           onClick={inputFocus}>
        <div className="container">
          <div className="App-header">
            Typing test
          </div>
            <ExerciseText />
            <HiddenInput />
          </div>
        </div>
    </Provider>
  );
}

export default App;
