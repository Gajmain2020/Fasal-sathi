import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Common/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Storage from "./components/Storage/Storage";
import SingleStorage from "./components/Storage/SingleStorage";
import ContactUs from "./components/Common/ContactUs";
import AboutUs from "./components/Common/AboutUs";
import Crops from "./components/Crops/Crops";
import SingleCrop from "./components/Crops/SingleCrop";

function App() {
  return (
    <>
      <div className="background"></div>
      <div className="">
        <Navbar />
        <div className="max-w-[92%] mx-auto">
          <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="/storage-house">
              <Route path="" element={<Storage />} />
              <Route path=":id" element={<SingleStorage />} />
            </Route>
            <Route path="/crops">
              <Route path="" element={<Crops />} />
              <Route path=":crop" element={<SingleCrop />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
