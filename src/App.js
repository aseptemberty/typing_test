import './App.css'
import ExerciseText from "./components/ExerciseText/ExerciseText";
import HiddenInput from "./components/HiddenInput/HiddenInput";
import {Provider} from "react-redux";
import {store} from './context/store'
function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <div className="container">
                  <div className="App-header">
                      Typing test
                  </div>
                  <HiddenInput />
                  <ExerciseText />
              </div>
          </div>
      </Provider>
  );
}

export default App;
