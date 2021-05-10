import React, { useReducer } from 'react';
import './App.css';
// import ClassCounter from './components/BasicHook/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import ClassCounterTwo from './components/ClassCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import ClassCounterOne from './components/ClassCounterOne';
// import HookCounterOne from './components/HookCounterOne';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/useAxios/DataFetching';
// // import ComponentC from './components/context/ComponentC';
// import CounterOne from './components/UseReducer/CounterOne';
// import CounterTwo from './components/UseReducer/CounterTwo';
import CounterThree from './components/UseReducer/CounterThree';
import ComponentA from './components/UseReducer/useReducer-Context/ComponentA';
import ComponentB from './components/UseReducer/useReducer-Context/ComponentB';
import ComponentD from './components/UseReducer/useReducer-Context/ComponentC';
import ComponentF from './components/UseReducer/useReducer-Context/ComponentF';
import ComponentC from './components/UseReducer/useReducer-Context/ComponentC';
import DataFetchingOne from './components/UseReducer/FetchData/DataFetchingOne';
import DataFetchingTwo from './components/UseReducer/FetchData/DataFetchingTwo';
import Counter from './components/usememo/Counter';
import FocusInput from './components/refsHook/FocusInput';
import ClassTimer from './components/refsHook/ClassTimer';
import HookTimer from './components/refsHook/HookTimer';
import DocTittleOne from './components/customHook/DocTittleOne';
import DocTittleTwo from './components/customHook/DocTitleTwo';
import CounterOne from './components/customHook/CounterOne';
import CounterTwo from './components/customHook/CounterTwo';
import UserForm from './components/customHook/UserForm';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {

    switch(action){
        case 'increment': 
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
 
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    // <CountContext.Provider 
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    <div className="App">
      {/* Count - {count} */}
      {/* <ClassCounter />
      <HookCounter />
      <ClassCounterTwo /><br/>
      <HookCounterTwo /><br/>
      <HookCounterThree />
      <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Manish"}>
        <ChannelContext.Provider value={'Manish Coder'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      {/* <CounterThree /> */}
       {/* <ComponentA />
       <ComponentB />
       <ComponentC /> */}
       {/* <DataFetchingOne />
       <DataFetchingTwo /> */}
       {/* <Counter /> */}
       {/* <FocusInput /> */}
       {/* <ClassTimer />
       <HookTimer /> */}
       {/* <DocTittleOne />
       <DocTittleTwo /> */}
       {/* <CounterOne />
       <CounterTwo /> */}
       {/* <UserForm /> */}
    </div>
    // </CountContext.Provider>
  );
}

export default App;
