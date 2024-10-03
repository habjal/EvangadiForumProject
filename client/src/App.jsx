import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Police from './pages/privacy-policy/Privacy-police';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/legal/privacy/" element={<Police />} />
      </Routes>
    </Router>
  );
}

export default App;