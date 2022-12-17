import React, {useState} from "react";

function App() {
  const [name, setName] = useState("Test Name");

  const changeName = () => {
    setName("New Name");
  }
  return (
    <div>
      My name is {name} <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
