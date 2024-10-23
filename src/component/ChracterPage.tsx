import { Attribute } from "./Attribute";

export const CharacterPage: React.FC<{ character: any }> = ({ character }) => {
    return (
        <div>
            <Attribute character={character} />
        </div>
    );
};