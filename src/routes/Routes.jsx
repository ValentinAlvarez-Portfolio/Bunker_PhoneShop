import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../components/Pages/HomePage.jsx";
import LoginPage from "../components/Pages/LoginPage.jsx";
import ProfilePage from "../components/Pages/ProfilePage.jsx";
import ItemListPage from "../components/Pages/ItemListPage.jsx";
import ItemDetailPage from "../components/Pages/ItemDetailPage.jsx";
import { LoginContext } from "../context/LoginContext/LoginContext.jsx";

export default function AppRoutes() {

      const { isAuthenticated } = useContext(LoginContext)

      const PrivateRoutes = ({ children }) => {

            return isAuthenticated ? children : <Navigate to="/login" />

      }

      const PublicRoutes = ({ children }) => {

            return !isAuthenticated ? children : <Navigate to="/" />

      }

      return (
            <Routes>

                  <Route path="/login" element={
                        <PublicRoutes>
                              <LoginPage />
                        </PublicRoutes>
                  } />

                  <Route path="/" element={
                        <PrivateRoutes>
                              <HomePage />
                        </PrivateRoutes>
                  } />

                  <Route path="/profile" element={
                        <PrivateRoutes>
                              <ProfilePage />
                        </PrivateRoutes>
                  } />

                  <Route path="/:sId" element={
                        <PrivateRoutes>
                              <ItemListPage />
                        </PrivateRoutes>
                  } />

                  <Route path="/:cId/:p_id" element={
                        <PrivateRoutes>
                              <ItemDetailPage />
                        </PrivateRoutes>
                  } />

                  <Route path="*" element={<Navigate to="/" />} />

            </Routes>
      );

}