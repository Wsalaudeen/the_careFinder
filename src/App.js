import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";
import SignUpForm from "./Pages/SignUpForm/SignUpForm";

import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <MainPage />
      <SocialIcons />
      <UsersGuide />
      <HospitalLists />
      <Users />
      <Footer /> */}

      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="sign-up" element={<SignUpForm />} />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
