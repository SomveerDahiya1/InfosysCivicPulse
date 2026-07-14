import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function CitizenLayout() {

    return (

        <div className="dashboard">

            <Sidebar />

            <main className="content">

                <Topbar />

                <Outlet />

            </main>

        </div>

    );

}