import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../utils/userSlice";

const AppLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(BASE_URL + "/profile/view", {
          withCredentials: true,
        });
        dispatch(login(res.data));
      } catch (err) {
        if (err.response?.status === 401) navigate("/login");
      }
    };
    if (!userData) {
      fetchUser();
    }
  }, [dispatch, navigate, userData]);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
