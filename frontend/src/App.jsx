import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrolltoTop.jsx";
import Home from "./pages/Home";

import CitizenLayout from "./layouts/CitizenLayout";

import CitizenDashboard from "./pages/citizen/CitizenDashboard.jsx";
import SubmitComplaint from "./pages/citizen/SubmitComplaint.jsx";
import TrackComplaint from "./pages/citizen/TrackComplaint.jsx";
import Notifications from "./pages/citizen/Notifications.jsx";
import Feedback from "./pages/citizen/Feedback.jsx";
import Profile from "./pages/citizen/Profile.jsx";

import OfficerDashboard from "./pages/officer/OfficerDashboard.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";

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