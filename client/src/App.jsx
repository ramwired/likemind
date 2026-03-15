import AppLayout from "./components/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="feed" element={<Feed />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
