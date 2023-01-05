import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Parent from "./components/Parent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log("effect");
    setIsLoggedIn(true);
  }, []);
  return (
    <div className="App">
      <Parent />
      {!isLoggedIn && <Login />}
    </div>
  );
}

export default App;
