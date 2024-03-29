import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  console.log("App store => ", store);
  return (
    <Provider store={store}>
      <div className="App">
      {/* <HooksCakeContainer /> */}
        {/* <ItemContainer cake />
      <ItemContainer />
      <CakeContainer />
      <IceCreamContainer />
      <NewCakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
