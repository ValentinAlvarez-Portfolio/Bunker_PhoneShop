import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../components/Pages/HomePage.jsx";
import LoginPage from "../components/Pages/LoginPage.jsx";
import RegisterPage from "../components/Pages/RegisterPage.jsx";
import ProfilePage from "../components/Pages/ProfilePage.jsx";
import ItemListPage from "../components/Pages/ItemListPage.jsx";
import ItemDetailPage from "../components/Pages/ItemDetailPage.jsx";
import CheckoutPage from "../components/Pages/CheckoutPage.jsx";
import { LoginContext } from "../context/LoginContext/LoginContext.jsx";
import { checkSession } from "../utils/users.js";

export default function AppRoutes() {

      const { currentUser, setCurrentUser, isAuthenticated, setAuthenticated, message, } = useContext(LoginContext);


      useEffect(() => {

            const { logged, userPayload } = checkSession();

            setCurrentUser(userPayload);

            setAuthenticated(logged);

      }, [currentUser && currentUser.id]);


      return (
            <Routes>

                  <Route path="/login" element={
                        <LoginPage />
                  } />

                  <Route path="/register" element={
                        <RegisterPage />
                  } />

                  <Route path="/" element={
                        <HomePage />
                  } />

                  <Route path="/profile" element={
                        isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />
                  } />

                  <Route path="/:sId" element={
                        <ItemListPage />
                  } />

                  <Route path="/:cId/:p_id" element={
                        <ItemDetailPage />
                  } />

                  <Route path="/checkout" element={
                        isAuthenticated ? <CheckoutPage /> : <Navigate to="/login" />
                  } />

                  <Route path="*" element={<Navigate to="/" />} />

            </Routes>
      );

}