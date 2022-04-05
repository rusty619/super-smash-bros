import './App.css';
import Fighter from "./components/Fighter.js"

function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        <Fighter name={'Roy'} color={'red'}/>
        <Fighter name={'Fox'} color={'green'}/>
        <Fighter name={'Ganondorf'} color={'purple'}/>
      </div>
    </div>
  );
}

// const Fighter = {name: 'Roy', color: 'red'}

export default App;
