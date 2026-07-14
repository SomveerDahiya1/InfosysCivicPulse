import {
    FaBell,
    FaMoon,
    FaUserCircle,
    FaSearch
} from "react-icons/fa";

import "../styles/Topbar.css";

export default function Topbar() {

    return (

        <header className="topbar">

            <div>

                <h1>Citizen Dashboard</h1>

                <p>Good Morning, Somveer 👋</p>

            </div>

            <div className="topbar-right">

                <div className="search-box">

                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Search complaints..."
                    />

                </div>

                <button className="icon-btn">

                    <FaBell />

                </button>

                <button className="icon-btn">

                    <FaMoon />

                </button>

                <div className="profile">

                    <FaUserCircle />

                    <span>Citizen</span>

                </div>

            </div>

        </header>

    );

}