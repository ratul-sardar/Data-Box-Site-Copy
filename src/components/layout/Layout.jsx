import { Outlet } from "react-router";
import NavBar from "../ui/NavBar/NavBar";
import Footer from "../ui/Footer/Footer";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
