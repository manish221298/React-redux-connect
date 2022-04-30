import logo from './logo.svg';
import './App.css';

function App(props) {
  console.log("props", props)
  return (
    <div className="App">
    <h1>userId:-{props.data.data.userId}</h1>
    <h1>id:-{props.data.data.id}</h1>
      <h1>title:-{props.data.data.title}</h1>
      <h1>React app</h1>
    </div>
  );
}

export default App;
