export function Result({ id, skill, rolledNum = 0, DCNumber = 0 }: { id: number, skill: string, rolledNum: number, DCNumber: number }) {
    const skillValue = 8;

    function resultIdentifier() {
        return (skillValue + rolledNum) >= DCNumber ? "Success" : "Failure";
    }

    return (
        <div>
            <h1>Skill Check Result</h1>
            <p>Character Number: {id}</p>
            <p>Skill: {skill} ({skillValue})</p>
            <p>You rolled: {rolledNum}</p>
            <p>DC: {DCNumber}</p>
            <p>Result: {resultIdentifier()}</p>
        </div>
    );
}