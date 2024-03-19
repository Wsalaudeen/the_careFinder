import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import SignUpForm from "./Pages/SignUpForm/SignUpForm";
import HospitalList from "./Pages/Hospitalist/HospitalList";
import MarkDown from "./Pages/MarkDown/MarkDown";
import Login from "./Pages/Login/Login";
import Forgot from "./Pages/Forgot/Forgot";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="mark-down" element={<MarkDown />} />
          <Route path="hospital-list" element={<HospitalList />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/forgot-password" element={<Forgot />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
