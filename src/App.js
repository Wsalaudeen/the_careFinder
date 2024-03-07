import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import UsersGuide from "./components/UsersGuide/UsersGuide";
import HospitalLists from "./components/HospitalLists/HospitalLists";
import Users from "./components/Users/Users";
import Footer from "./components/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <SocialIcons />
      <UsersGuide />
      <HospitalLists />
      <Users />
      <Footer />

      <Main>
        <BrowserRouter>
          <Routes>
            <Route />
            <Route />
            <Route />
            <Route />
          </Routes>
        </BrowserRouter>
      </Main>
    </div>
  );
}
