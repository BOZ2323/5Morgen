import { AllSubways } from "./components/AllSubways";
import { SubwayDetailPage } from "./components/SubwayDetailPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AllSubways />} />
          <Route path="/:name" element={<SubwayDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
