import logo from './logo.svg';
import './App.css';
// import { Greet } from './components/Greet';It is use when only export of component
import MyComponent from './components/destructureProps/Greet';//Attemted import error
import Greet from './components/destructureProps/Greet';
import Welcome from './components/destructureProps/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/conditional/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/style/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifeCycle/LifecycleA';
import LifecycleB from './components/LifecycleB';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/pureComp/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/Refs/RefsDemo';
import FocusInput from './components/Refs/FocusInput';
import FRParentInput from './components/FRParentInput';
import Hero from './components/ErrorBound/Hero';
import ErrorBoundary from './components/ErrorBound/ErrorBoundary';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
import User from './components/RenderProps/User';
import CounterRender from './components/RenderProps/CounterRender';
import ComponentC from './components/Context/ComponentC';
// import './appStyles.css'
// import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
        {/* <MyComponent /> */}
        {/* <Greet />
        <Welcome /> */}
        {/* <Hello /> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman"/> */}
        {/* <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonder Woman"/> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <Greet name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman"/> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <Inline /> */}
        {/* <Form /> */}
        {/* <LifecycleA /> */}
        {/* <FragmentDemo /> */}
         {/* <Table /> */}
        {/* <PureComp /> */}
        {/* <ParentComp /> */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}
        {/* <ErrorBoundary>
         <Hero heroName="Batman"></Hero>
         </ErrorBoundary>
         <ErrorBoundary>
         <Hero heroName="Superman"></Hero>
         </ErrorBoundary>
         <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary> */}
        {/* <ClickCounter name='manish'/>
        <HoverCounter /> */}
        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        {/* <User name="Rudra Sharma"/> */}
        {/* <User render={ (isLoggedIn) => isLoggedIn ? 'Manish' : 'Guest' } />  */}
        {/* <CounterRender render={ (count, incrementCount) => 
              <ClickCounterTwo count={count} incrementCount={incrementCount} /> }/>
        <CounterRender render={ (count, incrementCount) => 
              <HoverCounterTwo count={count} incrementCount={incrementCount} /> }/> */}
        {/* <CounterRender> 
          { (count, incrementCount) => 
              (<ClickCounterTwo count={count} incrementCount={incrementCount} /> )}
        </CounterRender>
        <CounterRender> 
          { (count, incrementCount) => (
              <HoverCounterTwo count={count} incrementCount={incrementCount} /> )}
        </CounterRender> */}
        <ComponentC />
    </div>
  );
}

export default App;
