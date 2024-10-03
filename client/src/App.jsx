import { useState } from "react";
import "./App.css";
import HowitWorks from "./pages/Howitworks/HowItWorks";
import { Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/howitworks" element={<HowitWorks />} />
      </Routes>
    </>
  );
}

export default App;
