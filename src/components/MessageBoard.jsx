import { useState } from 'react';


function MessageBoard() {
  const [input,setInput] = useState("");
  const [text, setText] = useState([])

  const addTodo = (e) => {
    e.preventDefault();
    const nTD = [...text];
    nTD.push(input);
    setText(nTD);
  }

  const delTodo = (delIndex) =>{
    const nTD = [...text]
    nTD.splice(delIndex,1)
    setText(nTD)
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
            placeholder="Enter message here"
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
          />
        </label>
        <button className="submit-message-button" onClick={addTodo}>Submit</button>
      </div>
      <div class="board">
        
          {
            text.map((item,index)=>{
              return (
                <div className="message">
                  <h1>{item}</h1>
                  <button 
                    className="delete-button"
                    onClick={()=>{delTodo(index)}}
                    >x</button>
                </div>
              )
            })
          }
        
      </div>
    </div>
  );
}

export default MessageBoard;
