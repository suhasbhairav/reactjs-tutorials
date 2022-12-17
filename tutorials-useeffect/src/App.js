import React, {useEffect, useState} from "react";

function App() {

  const [name, setName] = useState("Old Value");

  const changeName = () => {
    setName("New Value");
  };


  useEffect(() => {
    console.log("On load...");
  }, []);

  useEffect(() => {
    console.log("New Value:", name);
  }, [name]);
  
  
  return (
    <div className="App">
      Name is : {name} <button onClick={changeName}> Change </button>
    </div>
  );
}

export default App;
