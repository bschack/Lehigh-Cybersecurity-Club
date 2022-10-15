import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import "../libs/styles/globals.module.scss";
import { Homepage } from './homepage/homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
