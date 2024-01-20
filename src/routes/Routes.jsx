import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../components/Pages/HomePage.jsx";
import LoginPage from "../components/Pages/LoginPage.jsx";
import ProfilePage from "../components/Pages/ProfilePage.jsx";
import ItemListPage from "../components/Pages/ItemListPage.jsx";
import ItemDetailPage from "../components/Pages/ItemDetailPage.jsx";
import { LoginContext } from "../context/LoginContext/LoginContext.jsx";
import { checkSession } from "../utils/users.js";

export default function AppRoutes() {

      const { currentUser, isAuthenticated, setAuthenticated } = useContext(LoginContext);

      useEffect(() => {

            const { logged } = checkSession();

            setAuthenticated(logged);

      }, [currentUser && currentUser.id]);

      return (
            <Routes>

                  <Route path="/login" element={
                        <LoginPage />
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

                  <Route path="*" element={<Navigate to="/" />} />

            </Routes>
      );

}