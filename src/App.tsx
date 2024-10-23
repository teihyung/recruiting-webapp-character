import { useState } from "react";
import "./App.css";

import { Result } from "../src/component/Result";
import { CharacterPage } from "../src/component/ChracterPage";
import { Character } from './consts';

function App() {
  const firstCharacter: Character = {
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10,
  };

  const characterList: Character[] = [firstCharacter];
  const [num, setNum] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Chris Lee</h1>
      </header>
      <section className="App-section">

        <div>
          <Result id={1} skill="Strength" rolledNum={num} DCNumber={10} />
        </div>

        

        <div className = "Chracter-stat-page">
          <CharacterPage character={characterList[0]} />
        </div>


      </section>
    </div>
  );
}

export default App;
