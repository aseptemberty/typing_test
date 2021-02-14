import './App.css'
import ExerciseText from "./components/ExerciseText/ExerciseText";
import HiddenInput from "./components/HiddenInput/HiddenInput";

function App() {
  return (
    <div className="App">
        <div className="container">
            <div className="App-header">
                Typing test
            </div>
            <HiddenInput />
            <div className="row">
                <div className="col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            <ExerciseText />
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Buttons and stuff</h5>
                            <p>Speed</p>
                            <p>Accuracy</p>
                            <button type="button" id="start-button" className="btn btn-outline-primary">Start</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
