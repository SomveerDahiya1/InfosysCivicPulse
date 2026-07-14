import {
    FaHome,
    FaClipboardList,
    FaSearchLocation,
    FaBell,
    FaStar,
    FaUser,
    FaSignOutAlt
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

import "../styles/Sidebar.css";

export default function Sidebar() {

    const location = useLocation();

    return (

        <aside className="sidebar">

            <div className="sidebar-logo">

                <h2>🏛️ CivicPulse</h2>

                <p>Smart Governance</p>

            </div>

            <ul>

                <li className={location.pathname === "/citizen/dashboard" ? "active" : ""}>

                    <Link to="/citizen/dashboard">

                        <FaHome />

                        <span>Dashboard</span>

                    </Link>

                </li>

                <li className={location.pathname === "/citizen/submit" ? "active" : ""}>

                    <Link to="/citizen/submit">

                        <FaClipboardList />

                        <span>Submit Complaint</span>

                    </Link>

                </li>

                <li className={location.pathname === "/citizen/track" ? "active" : ""}>

                    <Link to="/citizen/track">

                        <FaSearchLocation />

                        <span>Track Complaint</span>

                    </Link>

                </li>

                <li className={location.pathname === "/citizen/notifications" ? "active" : ""}>

                    <Link to="/citizen/notifications">

                        <FaBell />

                        <span>Notifications</span>

                    </Link>

                </li>

                <li className={location.pathname === "/citizen/feedback" ? "active" : ""}>

                    <Link to="/citizen/feedback">

                        <FaStar />

                        <span>Feedback</span>

                    </Link>

                </li>

                <li className={location.pathname === "/citizen/profile" ? "active" : ""}>

                    <Link to="/citizen/profile">

                        <FaUser />

                        <span>Profile</span>

                    </Link>

                </li>

            </ul>

            <div className="logout">

                <FaSignOutAlt />

                <span>Logout</span>

            </div>

        </aside>

    );

}