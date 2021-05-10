import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

//Not required useMemo and useCallback when use globaly
// const array = ['one', 'Two', 'Three'];

// const fetchData = 
//   type => {
//     return (
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//         .then(response => response.json())
//         .then(json => console.log(json))
//     )
//   };



function App() {
  const [count, setCount] = useState(0);
  console.log("parent component")
  // const array = ['one', 'Two', 'Three'];

  //useMemo
  // const array = useMemo(() => {
  //   return ["one", "two", "three"]
  // },[])

  //useCallback
  const fetchData = useCallback(
    type => {
      return (
          fetch(`https://jsonplaceholder.typicode.com/${type}`)
          .then(response => response.json())
          .then(json => console.log(json))
      )
    },[]);
  useEffect(() => {
    fetchData('todos')
  },[fetchData])

  return (
    <div className="App">
      <button type="button" onClick={() => setCount(count+1)}>Count - {count}</button>
      <ChildComponent title="This is title" fetchData={fetchData}/>
    </div>
  );
}

export default App;
