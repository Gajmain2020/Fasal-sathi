import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Common/Navbar";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <>
      <div className="background"></div>
      <div>
        <Navbar />
        <div className="max-w-[90%] mx-auto ">
          <Routes>
            <Route path="" element={<Homepage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
