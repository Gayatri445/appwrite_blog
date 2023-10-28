import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          console.log("app",userData);
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [authStatus]);
  return !loading ? (
    <div className="min-h-screen  bg-gray-300 flex flex-col justify-between ">
        <Header />
        <main className="min-h-full flex flex-col ">
          <Outlet />
        </main>
        <Footer />
    </div>
  ) : null;
}

export default App;
