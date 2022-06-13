import React from "react";
import LogIn from "./pages/logIn/LogIn";
import "./App.css";
import SignUp from "./pages/signUp/SignUp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthContextProvider from "./store/auth-context";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/user" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
