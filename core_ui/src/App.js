// AI-ASSISTED REFACTOR (ChatGPT – GPT-5)
import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import MyLoans from "./pages/MyLoans";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
    return (
        <div>
            <Navbar/>
            <main className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/my-loans"
                        element={
                            <PrivateRoute>
                                <MyLoans/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/equipment/edit/:id"
                        element={
                            <PrivateRoute roles={["admin"]}>
                                <EquipmentEdit/>
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<div>404 – Not Found</div>}/>
                </Routes>
            </main>
        </div>
    );
}
