import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Seriya from "./Components/Seriya/Seriya";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Seriya />} />
      </Routes>
    </div>
  );
}

export default App;
