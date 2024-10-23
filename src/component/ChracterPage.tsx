import React, { useState } from 'react';
import { Attribute } from './Attribute';
import { Class } from './Class';
import { Character } from '../consts';

export const CharacterPage: React.FC<{ character: Character }> = ({ character }) => {
    const [attributes, setAttributes] = useState<Character>({
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10,
    });

    return (
        <div>
            <Attribute attributes={attributes} setAttributes={setAttributes} />
            <Class character={attributes} />
        </div>
    );
};
