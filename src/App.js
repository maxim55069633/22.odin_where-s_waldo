import addExampleData from './Components/addExampleData';
import ReadDocument from "./Components/ReadDocument";


import Timer from "./Components/Timer";
import GameMap from "./Components/GameMap";

function App() {


  addExampleData();
  ReadDocument();

  return (
    <div>
      <h1>Find the Leonard</h1>
      <p>Leonard is the turtle depicted as wearing a blue bandanna, his signature weapons are two swords.</p>
      <Timer/>
      <GameMap/>
    </div>
  );
}

export default App;
