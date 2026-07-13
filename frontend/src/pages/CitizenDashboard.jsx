import "../styles/Dashboard.css";

export default function CitizenDashboard() {
    return (
        <div className="dashboard">

            {/* Sidebar */}

            <aside className="sidebar">

                <h2>🏛️ CivicPulse</h2>

                <ul>
                    <li className="active">📊 Dashboard</li>
                    <li>📝 Submit Complaint</li>
                    <li>📍 Track Complaint</li>
                    <li>🔔 Notifications</li>
                    <li>⭐ Feedback</li>
                    <li>👤 My Profile</li>
                    <li>🚪 Logout</li>
                </ul>

            </aside>

            {/* Main Content */}

            <main className="content">

                <header className="topbar">

                    <div>
                        <h1>Citizen Dashboard</h1>
                        <p>Welcome Back 👋</p>
                    </div>

                    <button>
                        🌙 Dark Mode
                    </button>

                </header>

                {/* Statistics */}

                <div className="stats">

                    <div className="stat-card">
                        <h2>12</h2>
                        <p>Total Complaints</p>
                    </div>

                    <div className="stat-card">
                        <h2>3</h2>
                        <p>Pending</p>
                    </div>

                    <div className="stat-card">
                        <h2>5</h2>
                        <p>In Progress</p>
                    </div>

                    <div className="stat-card">
                        <h2>4</h2>
                        <p>Resolved</p>
                    </div>

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

                <table>

                    <thead>

                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>

                    </thead>

                    <tbody>

                    <tr>

                        <td>CP001</td>

                        <td>Road Damage</td>

                        <td>Road</td>

                        <td>
                                <span className="pending">
                                    Pending
                                </span>
                        </td>

                        <td>
                            <button>View</button>
                        </td>

                    </tr>

                    <tr>

                        <td>CP002</td>

                        <td>Water Leakage</td>

                        <td>Water</td>

                        <td>
                                <span className="resolved">
                                    Resolved
                                </span>
                        </td>

                        <td>
                            <button>View</button>
                        </td>

                    </tr>

                    <tr>

                        <td>CP003</td>

                        <td>Garbage Collection</td>

                        <td>Sanitation</td>

                        <td>
                                <span className="progress">
                                    In Progress
                                </span>
                        </td>

                        <td>
                            <button>View</button>
                        </td>

                    </tr>

                    </tbody>

                </table>

            </main>

        </div>
    );
}