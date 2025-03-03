import logo from './logo.svg';
import './App.css';
import ButtonClickDemo from './EventDemo/ButtonClickDemo';
import FunctionWithParameterComp from './EventDemo/FunctionWithParameterComp';
import HandlingEventWithState from './EventDemo/HandlingEventWithState';
import HandlingInputEvent from './EventDemo/HandlingInputEvent';
import UseState from './HookDemo/UseState';

function App() {
  return (
    <div className="App">
      <h3 className="display-1">Event Demo </h3>
    <ButtonClickDemo/>
    <FunctionWithParameterComp/>
    <HandlingEventWithState/>
    <HandlingInputEvent/>
    <UseState/>
    </div>
  );
}

export default App;
