import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Common/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Storage from "./components/Storage/Storage";
import SingleStorage from "./components/Storage/SingleStorage";

function App() {
  return (
    <>
      <div className="background"></div>
      <div className="">
        <Navbar />
        <div className="max-w-[90%] mx-auto min-h-100">
          <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="/storage-house">
              <Route path="" element={<Storage />} />
              <Route path=":id" element={<SingleStorage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
