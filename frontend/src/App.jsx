import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CitizenDashboard from "./pages/CitizenDashboard";
import OfficerDashboard from "./pages/OfficerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/citizen-dashboard"
                    element={<CitizenDashboard />}
                />

                <Route
                    path="/officer-dashboard"
                    element={<OfficerDashboard />}
                />

                <Route
                    path="/admin-dashboard"
                    element={<AdminDashboard />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;