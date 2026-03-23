import AppLayout from "./components/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import AuthLayout from "./components/AuthLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
        </Route>
        <Route path="/" element={<AppLayout />}>
          <Route path="feed" element={<Feed />}></Route>
          <Route path="edit" element={<EditProfile />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
