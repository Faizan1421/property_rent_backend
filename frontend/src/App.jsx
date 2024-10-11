import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Loader } from "lucide-react";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/auth/SignUpPage";
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./lib/axios";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/users/current-user");
        return res.data;
      } catch (err) {
        if (err.response && err.response.status === 401) {
          return null;
        }
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
   
   
  });
  

  if (isLoading) return (<div className="flex justify-center items-center h-screen"> <Loader className='size-10 animate-spin text-blue-700' /> </div>)
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<HomePage/>}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />
         <Route
          path="/forgot-password"
          element={!authUser ? <ForgotPasswordPage /> : <Navigate to={"/"} />}
        />
         <Route
          path="/reset-password/:token"
          element={!authUser ? <ResetPasswordPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/profile/:username"
          element={authUser ? <ProfilePage /> : <Navigate to={"/login"} />}
        />
      </Routes>
      <Toaster 
        position="bottom-center"
        reverseOrder={false}
      />
    </Layout>
  );
}

export default App;
