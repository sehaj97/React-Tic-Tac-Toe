import { useState } from "react";
export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    const handleEditClick = () => { setIsEditing((edit) => !edit) }
    return (
        <li >
            <span className="player">
                {(!isEditing) ? (<span className="player-name">{playerName}</span>) : (<input type="text" value={playerName} onChange={(e) => (setPlayerName(e.target.value))} required />)}
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}