import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Privacy from "./components/Footer/Privacy";
import Terms from "./components/Footer/Terms";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
      </Routes>
    </>
  );
}

export default App;
