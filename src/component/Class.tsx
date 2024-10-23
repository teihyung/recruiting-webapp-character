import React, { useState } from 'react';
import { CLASS_LIST, Character } from '../consts';

export const Class: React.FC<{ character: Character }> = ({ character }) => {
    const [selectedClass, setSelectedClass] = useState<string | null>(null); 

    const canBeClass = (className: string) => {
        const classAttributes = CLASS_LIST[className];
        return Object.entries(classAttributes).every(([key, value]) => 
            typeof value === 'number' && character[key as keyof Character] >= value
        );
    };

    const handleClassClick = (className: string) => {
        setSelectedClass(className === selectedClass ? null : className); 
    };

    const handleClose = () => {
        setSelectedClass(null); 
    };

    return (
        <div>
            <h1>Class</h1>
            {Object.keys(CLASS_LIST).map(className => (
                <div
                    key={className}
                    onClick={() => handleClassClick(className)}
                    style={{
                        color: canBeClass(className) ? 'red' : 'white',
                        cursor: 'pointer',
                        margin: '5px 0',
                    }}
                >
                    {className}
                </div>
            ))}
            {selectedClass && ( 
                <div style={{ marginTop: '10px', color: 'white' }}>
                    <h2>Minimum Values for {selectedClass}:</h2>
                    <ul>
                        {Object.entries(CLASS_LIST[selectedClass]).map(([key, value]) => (
                            <li key={key}>
                                {key}: {value as React.ReactNode}
                            </li>
                        ))}
                    </ul>
                    <button 
                        onClick={handleClose}
                        style={{ 
                            marginTop: '10px', 
                            padding: '5px 10px', 
                            backgroundColor: 'black', 
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};
