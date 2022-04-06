import './App.css';
import Fighter from "./components/Fighter.js"
import FighterScreen from './components/FighterScreen';
import { useState } from "react"

const characters = [
  {name: "Roy",color: "red"},
  {name: "Fox", color: "green"},
  {name: "Ganondorf", color: "purple"},
  {name: "Sheik", color: "lightskyblue"},
  {name: "cloud", color: "lightgreen"},
  {name: "zelda", color: "gold"},
  {name: "samus", coloe: "firebrick"},
  {name: "link", color: "yellow"}
  
]

function App() {
  const [visible, setVisible] = useState(false)
  const [selectCharacter, setSelectCharacter] = useState(characters[0])
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {characters.map((element,i) => {
          return <Fighter name={element.name} color={element.color} setVisible={setVisible} selectCharacter={selectCharacter} setSelectCharacter={setSelectCharacter}/>
        })}
      </div>
      <FighterScreen  isVisible={visible} setVisible={setVisible} selectCharacter={selectCharacter}/>
    </div>
  );
}

// const Fighter = {name: 'Roy', color: 'red'}

export default App;
