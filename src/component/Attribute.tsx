import React from 'react';
import { Character } from '../consts';

interface AttributeProps {
    attributes: Character;
    setAttributes: React.Dispatch<React.SetStateAction<Character>>;
}

const maxPoints = 70;
const minPoints = 7;

const calculateModifier = (value: number) => {
    return Math.floor((value - 10) / 2);
};

export const Attribute: React.FC<AttributeProps> = ({ attributes, setAttributes }) => {
    const totalPoints = Object.values(attributes).reduce((acc, value) => acc + value, 0);

    const handleIncrement = (key: keyof Character) => {
        if (totalPoints < maxPoints) {
            setAttributes((prev) => ({ ...prev, [key]: prev[key] + 1 }));
        }
    };

    const handleDecrement = (key: keyof Character) => {
        if (attributes[key] > minPoints) {
            setAttributes((prev) => ({ ...prev, [key]: prev[key] - 1 }));
        }
    };

    return (
        <div>
            <h2>Attributes</h2>
            {Object.entries(attributes).map(([key, value]) => (
                <div key={key}>
                    <div>
                        {key}: {value} 
                        <span> (Modifier: {calculateModifier(value)})</span>
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
