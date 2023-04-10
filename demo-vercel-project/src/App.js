import logo from "./logo.svg";
import "./App.css";
import DoggoForm from "./DoggoForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Doggo Friends</h1>
        <button>View Dog Friends</button>
      </header>
      <DoggoForm />
    </div>
  );
}

export default App;
