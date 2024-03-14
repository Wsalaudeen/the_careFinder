import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import SignUpForm from "./Pages/SignUpForm/SignUpForm";
import HospitalList from "./Pages/Hospitalist/HospitalList";
import MarkDown from "./Pages/MarkDown/MarkDown";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="mark-down" element={<MarkDown />} />
          <Route path="hospital-list" element={<HospitalList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
