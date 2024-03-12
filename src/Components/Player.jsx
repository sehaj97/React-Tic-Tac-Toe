import { useState } from "react";
export default function Player({ name, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    const handleEditClick = () => {
        setIsEditing((edit) => !edit);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    };
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {(!isEditing) ? (<span className="player-name">{playerName}</span>) : (<input type="text" value={playerName} onChange={(e) => (setPlayerName(e.target.value))} required />)}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}