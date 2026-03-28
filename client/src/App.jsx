import AppLayout from "./components/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import AuthLayout from "./components/AuthLayout";
import LandingNavbar from "./components/LandingNavbar";
import Connections from "./pages/Connections";
import Requests from "./pages/Requests";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingNavbar />}></Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
        </Route>
        <Route element={<AppLayout />}>
          <Route path="feed" element={<Feed />}></Route>
          <Route path="edit" element={<EditProfile />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="connections" element={<Connections />}></Route>
          <Route path="requests" element={<Requests />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
