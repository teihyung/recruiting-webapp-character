import React, { useState } from 'react';

interface Character {
    Strength: number;
    Dexterity: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
}

export const Attribute: React.FC<{ character: Character }> = ({ character }) => {
    const [attributes, setAttributes] = useState<Character>({
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10,
    });

    const totalPoints = Object.values(attributes).reduce((acc, value) => acc + value, 0);

    const handleIncrement = (key: keyof Character) => {
        if (totalPoints < 70) {
            setAttributes((prev) => ({ ...prev, [key]: prev[key] + 1 }));
        }
    };

    const handleDecrement = (key: keyof Character) => {
        if (attributes[key] > 0) {
            setAttributes((prev) => ({ ...prev, [key]: prev[key] - 1 }));
        }
    };

    return (
        <div>
            {Object.entries(attributes).map(([key, value]) => (
                <div key={key}>
                    <div>
                        {key}:
                        {value}
                        <button onClick={() => handleIncrement(key as keyof Character)}>+</button>
                        <button onClick={() => handleDecrement(key as keyof Character)}>-</button>
                    </div>
                </div>
            ))}
            <div>Total Points: {totalPoints}</div>
        </div>
    );
};

export default Attribute;