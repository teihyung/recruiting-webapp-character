import React, { useState } from "react";
import "./App.css";
import { Result } from "../src/component/Result";
import { CharacterPage } from "../src/component/ChracterPage";
import { Character } from './consts';
import { SKILL_LIST } from './consts';

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
  const [selectedSkill, setSelectedSkill] = useState<string>(SKILL_LIST[0].name);


  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Chris Lee</h1>
      </header>
      <section className="App-section">
        <div>
          <Result id={1} skill={selectedSkill} DCNumber={num} />
        </div>

        <div>
          <label>Skill:</label>
          <select
            id="skill-select"
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            {SKILL_LIST.map((skill) => (
              <option key={skill.name} value={skill.name}>
                {skill.name}
              </option>
            ))}
          </select>

          <label>DC:</label>
          <input
            type="number"
            value={num}
            min={1}
            max={20}
            onChange={(e) => setNum(Math.max(1, Math.min(20, parseInt(e.target.value))))}
          />
        </div>

        <div className="Character-stat-page">
          <CharacterPage character={characterList[0]} />
        </div>
      </section>
    </div>
  );
}

export default App;
