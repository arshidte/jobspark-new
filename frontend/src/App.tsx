import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </>
  );
}

export default App;
