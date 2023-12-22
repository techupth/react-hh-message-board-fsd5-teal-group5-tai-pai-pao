import { useState } from "react";

function MessageBoard() {
  const [mesInput, setMesIput] = useState("");
  const [mesList, setMesList] = useState([]);

  const handAddMesList = () => {
    const newMesList = [...mesList];

    newMesList.push(mesInput);

    setMesList(newMesList);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => {
              setMesIput(e.target.value);
            }}
            value={mesInput}
          />
        </label>
        <button className="submit-message-button" onClick={handAddMesList}>
          Submit
        </button>
      </div>
      <div class="board">
        {mesList.map((mes, index) => {
          return (
            <div key={index} className="message">
              <h1>{mes}</h1>
              <button className="delete-button">x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
