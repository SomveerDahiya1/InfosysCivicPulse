import {
    FaPlusCircle,
    FaSearchLocation,
    FaCommentDots
} from "react-icons/fa";

import "../styles/Dashboard.css";

export default function QuickActions() {

    return (

        <div className="quick-actions">

            <div className="quick-card">

                <FaPlusCircle />

                <h3>New Complaint</h3>

                <p>Register a new civic issue.</p>

                <button>Create</button>

            </div>

            <div className="quick-card">

                <FaSearchLocation />

                <h3>Track Complaint</h3>

                <p>Check complaint status.</p>

                <button>Track</button>

            </div>

            <div className="quick-card">

                <FaCommentDots />

                <h3>Feedback</h3>

                <p>Rate our services.</p>

                <button>Give Feedback</button>

            </div>

        </div>

    );

}