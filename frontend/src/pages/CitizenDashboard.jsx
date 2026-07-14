import "../styles/Dashboard.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCard from "../components/DashboardCard";
import QuickActions from "../components/QuickActions";
import {

    FaClipboardList,
    FaClock,
    FaSpinner,
    FaCheckCircle

} from "react-icons/fa";
import ComplaintTable from "../components/ComplaintTable";

export default function CitizenDashboard() {
    return (
        <div className="dashboard">



            {/* Main Content */}

            <main className="content">



                {/* Statistics */}
                <div className="stats">

                    <DashboardCard

                        title="Total Complaints"

                        count="12"

                        icon={<FaClipboardList />}

                        color="#2563eb"

                    />

                    <DashboardCard

                        title="Pending"

                        count="3"

                        icon={<FaClock />}

                        color="#f59e0b"

                    />

                    <DashboardCard

                        title="In Progress"

                        count="5"

                        icon={<FaSpinner />}

                        color="#3b82f6"

                    />

                    <DashboardCard

                        title="Resolved"

                        count="4"

                        icon={<FaCheckCircle />}

                        color="#16a34a"

                    />

                </div>

                {/* Toolbar */}

                <div className="toolbar">

                    <input
                        className="search"
                        placeholder="Search Complaint..."
                    />

                    <button className="new-btn">
                        + New Complaint
                    </button>

                </div>

                {/* Complaint Table */}

                <ComplaintTable />
                <QuickActions />
                <div className="bottom-section">

                    <div className="profile-card">

                        <h2>Citizen Profile</h2>

                        <img
                            src="https://i.pravatar.cc/120"
                            alt="profile"
                        />

                        <h3>Somveer Dahiya</h3>

                        <p>Citizen ID : CP10245</p>

                        <p>📍 Gurgaon, Haryana</p>

                    </div>

                    <div className="notification-card">

                        <h2>Latest Updates</h2>

                        <ul>

                            <li>✅ Road Complaint #CP001 Assigned</li>

                            <li>🚰 Water Leakage Complaint Resolved</li>

                            <li>📢 Municipality issued new notice.</li>

                            <li>⭐ Don't forget to submit feedback.</li>

                        </ul>

                    </div>

                </div>
            </main>

        </div>
    );
}