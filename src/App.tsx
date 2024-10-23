import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST} from './consts';

import {Result} from '../src/component/Result';


function App() {
  const [num, setNum] = useState<number>(0);
  const maxAttribute = 70;

  const selectedCharacter = CLASS_LIST['Barbarian'];
  console.log(selectedCharacter);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Chris Lee</h1>
      </header>
      <section className="App-section">

      

        <div>
          {/* Value:
          {num}
          <button>+</button>
          <button>-</button> */}

          <Result id={1} skill="Strength" rolledNum={num} DCNumber={10} />

          {/* <Result /> */}
        </div>
      </section>
    </div>
  );
}

export default App;
