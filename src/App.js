import logo from './logo.svg';
import './App.css';
import ButtonClickDemo from './EventDemo/ButtonClickDemo';
import FunctionWithParameterComp from './EventDemo/FunctionWithParameterComp';
import HandlingEventWithState from './EventDemo/HandlingEventWithState';
import HandlingInputEvent from './EventDemo/HandlingInputEvent';
import UseState from './HookDemo/UseState';
import UseStateUser from './HookDemo/UseStateUser';
import UseEffect from './HookDemo/UseEffect';
import Parent from './HookDemo/PropDrilling/Parent';
import UserConsumer from './HookDemo/UseContextDemo/UserConsumer';
import SetCustomerDetails from './HookDemo/LocalStorageDemo/SetCustomerDetails';
import GetCustomerDetails from './HookDemo/LocalStorageDemo/GetCustomerDetails';
import SetCart from './HookDemo/LocalStorageDemo/SetCart';
import GetCart from './HookDemo/LocalStorageDemo/GetCart';
import UseCustomHook from './HookDemo/CustomHookDemo/UseCustomHook';

function App() {
  const UserData = {
    firstName: "Shiva",
    lastName: "Ram",
  };
  return (
    <div className="App">
      <h3 className="display-1">Event Demo </h3>
    {/* <ButtonClickDemo/>
    <FunctionWithParameterComp/>
    <HandlingEventWithState/>
    <HandlingInputEvent/>
    <UseState/>
    <UseStateUser/>
    <UseEffect/>
    <Parent user={UserData} />
    <UserConsumer/> */}
    {/* <SetCustomerDetails/>
    <GetCustomerDetails/> */}
    <SetCart/>
    <GetCart/>
    <UseCustomHook/>
    </div>
  );
}

export default App;
