import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function PageLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default PageLayout;
