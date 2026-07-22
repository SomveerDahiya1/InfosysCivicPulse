import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrolltoTop.jsx";
import Home from "./pages/Home";

import OfficerLayout from "./layouts/OfficerLayout";

import OfficerDashboard from "./pages/officer/OfficerDashboard";
import AssignedComplaints from "./pages/officer/AssignedComplaints";
import ComplaintDetails from "./pages/officer/ComplaintDetails";
import UpdateComplaint from "./pages/officer/UpdateComplaint";
import OfficerNotifications from "./pages/officer/OfficerNotifications.jsx";
import OfficerProfile from "./pages/officer/OfficerProfile.jsx";

import CitizenLayout from "./layouts/CitizenLayout";
import CitizenDashboard from "./pages/citizen/CitizenDashboard.jsx";
import SubmitComplaint from "./pages/citizen/SubmitComplaint.jsx";
import TrackComplaint from "./pages/citizen/TrackComplaint.jsx";
import CitizenNotifications from "./pages/citizen/CitizenNotifications.jsx";
import CitizenFeedback from "./pages/citizen/CitizenFeedback.jsx";
import CitizenProfile from "./pages/citizen/CitizenProfile.jsx";


import AdminDashboard from "./pages/admin/AdminDashboard.jsx";

import NotFound from "./pages/NotFound";

function App() {

    return (
        <>
            <ScrollToTop />
        <Routes>
            <Route
                path="/officer"
                element={<OfficerLayout />}
            >

                <Route
                    path="dashboard"
                    element={<OfficerDashboard />}
                />

                <Route
                    path="assigned"
                    element={<AssignedComplaints />}
                />

            </Route>
            <Route path="/officer" element={<OfficerLayout />}>

                <Route
                    path="dashboard"
                    element={<OfficerDashboard />}
                />

                <Route
                    path="assigned"
                    element={<AssignedComplaints />}
                />

                <Route
                    path="details"
                    element={<ComplaintDetails />}
                />

                <Route
                    path="update"
                    element={<UpdateComplaint />}
                />

                <Route
                    path="notifications"
                    element={<OfficerNotifications />}
                />

                <Route
                    path="profile"
                    element={<OfficerProfile />}
                />

            </Route>

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
                    element={<CitizenNotifications />}
                />

                <Route
                    path="feedback"
                    element={<CitizenFeedback />}
                />

                <Route
                    path="profile"
                    element={<CitizenProfile />}
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