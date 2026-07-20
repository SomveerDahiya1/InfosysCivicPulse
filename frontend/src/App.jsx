import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrolltoTop";
import Home from "./pages/Home";

import CitizenLayout from "./layouts/CitizenLayout";

import CitizenDashboard from "./pages/CitizenDashboard";
import SubmitComplaint from "./pages/SubmitComplaint";
import TrackComplaint from "./pages/TrackComplaint";
import Notifications from "./pages/Notifications";
import Feedback from "./pages/Feedback";
import Profile from "./pages/Profile";

import OfficerDashboard from "./pages/OfficerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import NotFound from "./pages/NotFound";

function App() {

    return (
        <>
            <ScrollToTop />
        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/citizen"
                element={<CitizenLayout />}
            >

                <Route
                    path="dashboard"
                    element={<CitizenDashboard />}
                />

                <Route
                    path="submit"
                    element={<SubmitComplaint />}
                />

                <Route
                    path="track"
                    element={<TrackComplaint />}
                />

                <Route
                    path="notifications"
                    element={<Notifications />}
                />

                <Route
                    path="feedback"
                    element={<Feedback />}
                />

                <Route
                    path="profile"
                    element={<Profile />}
                />

            </Route>

            <Route
                path="/officer/dashboard"
                element={<OfficerDashboard />}
            />

            <Route
                path="/admin/dashboard"
                element={<AdminDashboard />}
            />

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
        </>
    );

}

export default App;