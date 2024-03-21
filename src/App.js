import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import SignUpForm from "./Pages/SignUpForm/SignUpForm";
import HospitalList from "./Pages/Hospitalist/HospitalList";
import AddHospitals from "./Pages/AddHospitals/AddHospitals";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Forgot from "./Pages/Forgot/Forgot";
import Profile from "./Pages/Profile/Profile";
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
          <Route path="add-hospitals" element={<AddHospitals />} />
          <Route path="hospital-list" element={<HospitalList />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
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
