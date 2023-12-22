import { useState } from "react";

function MessageBoard() {
  let [input, setInput] = useState("");
  let [message, setMesaage] = useState(["Hello this is first message"]);

  function handleMesaage() {
    const newMessage = [...message];
    newMessage.push(input);

    console.log(newMessage);
    setMesaage(newMessage);
  }

function deleteMessage(index){

  const newMessage = [...message];
  newMessage.splice(index,1);
  setMesaage(newMessage);
}


  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here "
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => {
            handleMesaage();
          }}
        >
          Submit
        </button>
      </div>
      <div class="board">
        {message.map((item, index) => {
          return (
            <div className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  deleteMessage(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
