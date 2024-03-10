import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";
import SignUpForm from "./Pages/SignUpForm/SignUpForm";
import HospitalMainPage from "./Pages/HospitalMainPage/HospitalMainPage";

import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="hospital-main-page" element={<HospitalMainPage />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
