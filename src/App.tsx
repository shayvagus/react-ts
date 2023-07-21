import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  const [userName, setUserName] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {}, []);

  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button>Save user</button>
      <Header userName={userName} />
    </div>
  );
}

export default App;
