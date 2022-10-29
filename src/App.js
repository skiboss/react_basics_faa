import logo from './logo.svg';
import './App.css';
import Card from './Card';
import State from './state';
import ClassCom from './ClassCom';
import Form from './Form';

function App() {
  return (
    <div>
      {/* <p>Hello World</p>
      <GreetUser name="Oghenemeru" age="24" /> */}
      <Card name="Oghenemeru Avwemoya" handle="@meruAvwemoya" />
      <State />
      <ClassCom />
      <Form />
    </div>
  );
}


function GreetUser(props) {
  const {name, age} = props
  return (
    <p>Hello {name}, you are {age ? age : "-"}</p>
  )
}

export default App;
