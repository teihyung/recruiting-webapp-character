import React, { useState } from 'react';

export function Result({ id, skill, DCNumber }: { id: number; skill: string; DCNumber: number }) {
    const [skillValue, setSkillValue] = useState(0); 
    const randomRoll = () => Math.floor(Math.random() * 20) + 1;

    const handleRoll = () => {
        const randomnumber = randomRoll();
        return (skillValue + randomnumber) >= DCNumber ? "Success" : "Failure";
    };

    return (
        <div>
            <h1>Skill Check Result</h1>
            <p>Character Number: {id}</p>
            <p>Skill: {skill} ({skillValue})</p>
            <p>DC: {DCNumber}</p>
            <button onClick={handleRoll}>Roll</button>
            <p>Result: {handleRoll()}</p> 
        </div>
    );
}
