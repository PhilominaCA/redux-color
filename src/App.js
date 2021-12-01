import './App.css';
import { useReducer } from "react";

const initialColor={color:"green"};

const colorReducer = (state, action) => {
  switch (action.type) {
    case "changeColor":
      // store updated
      return { color: action.currentColor };
      case "reset":
        return{color:action.payload};
    default:
      return state;
  }
};

function App() {
  const [colorState, colorDispatch] = useReducer(colorReducer, initialColor); 

  return (
    <div className="App" style={ {backgroundColor:colorState.color} }>
      <div className="head" >
        <h1>Change the Background Color..!!</h1>

      <input id="colorInput" placeholder="Enter a color..!" type="text"
      onChange={(event) => colorDispatch({ type: "changeColor", currentColor:event.target.value })}/>
     <br/>
      <button onClick={() => colorDispatch({ type: "reset", payload: "white" })}>
        Reset
      </button>
      </div>
    </div>
  );
}

export default App;
