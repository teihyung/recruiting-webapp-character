import React from 'react';
import { Character } from '../consts';

interface AttributeProps {
    attributes: Character;
    setAttributes: React.Dispatch<React.SetStateAction<Character>>;
}

export const Attribute: React.FC<AttributeProps> = ({ attributes, setAttributes }) => {
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
