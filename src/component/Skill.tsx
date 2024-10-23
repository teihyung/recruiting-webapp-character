import React, { useState } from 'react';
import { Character, SKILL_LIST } from '../consts';

interface SkillsProps {
    attributes: Character;
}

const calculateModifier = (value: number) => {
    return Math.floor((value - 10) / 2);
};

export const Skills: React.FC<SkillsProps> = ({ attributes }) => {
    const totalModifiers = Object.keys(attributes).reduce((acc, key) => {
        return acc + calculateModifier(attributes[key as keyof Character]);
    }, 0);


    const skillPointsAvailable = 10 + (4 * totalModifiers);

    const [pointsSpent, setPointsSpent] = useState<Record<string, number>>(
        Object.fromEntries(SKILL_LIST.map(skill => [skill.name, 0]))
    );

    const totalPointsSpent = Object.values(pointsSpent).reduce((acc, points) => acc + points, 0);

    const handleIncrement = (skillName: string) => {
        if (totalPointsSpent < skillPointsAvailable) {
            setPointsSpent(prev => ({ ...prev, [skillName]: prev[skillName] + 1 }));
        }
    };

    const handleDecrement = (skillName: string) => {
        if (pointsSpent[skillName] > 0) {
            setPointsSpent(prev => ({ ...prev, [skillName]: prev[skillName] - 1 }));
        }
    };

    return (
        <div>
            <h2>Skills</h2>
            <div>Total Skill Points Available: {skillPointsAvailable}</div>
            <div>Total Points Spent: {totalPointsSpent} / {skillPointsAvailable}</div>
            {SKILL_LIST.map(skill => {
                const modifier = calculateModifier(attributes[skill.attributeModifier as keyof Character]);
                const totalSkillValue = pointsSpent[skill.name] + modifier;

                return (
                    <div key={skill.name} style={{ margin: '10px 0' }}>
                        <div>
                            {skill.name} - Points: {pointsSpent[skill.name]} 
                            <button onClick={() => handleIncrement(skill.name)} disabled={totalPointsSpent >= skillPointsAvailable}>+</button>
                            <button onClick={() => handleDecrement(skill.name)}>-</button>
                            <span> Modifier ({skill.attributeModifier}): {modifier}</span>
                            <span> Total: {totalSkillValue}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Skills;
