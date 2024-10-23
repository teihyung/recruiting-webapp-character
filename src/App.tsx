import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts";

import { Result } from "../src/component/Result";
import { Attribute } from "../src/component/Attribute";
import { CharacterPage } from "../src/component/ChracterPage";

function App() {

  interface Character {
    Strength: number;
    Dexterity: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
  }

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
