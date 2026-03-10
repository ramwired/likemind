import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Profile from "./Profile";
import Connections from "./Connections";
import Login from "./Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
