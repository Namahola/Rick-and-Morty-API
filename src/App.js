import "./App.css";
import { Link, Router } from "@reach/router";
import Home from "./components/Home";
import SingleCharacter from "./components/SingleCharacter";

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <Link to="/">Home</Link>
      <Router>
        <Home path="/" />
        <SingleCharacter path="/character/:id" />
      </Router>
    </div>
  );
}

export default App;
