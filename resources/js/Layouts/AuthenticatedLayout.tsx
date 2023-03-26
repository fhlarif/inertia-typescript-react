import { useState, PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div className="flex min-h-screen bg-gray-100 grow dark:bg-gray-900">
            <Sidebar showSidebar={showSidebar} />
            <div
                className={`${
                    showSidebar ? "sm:ml-48 lg:ml-64" : ""
                } w-full mx-auto`}
            >
                <Navbar
                    setShowSidebar={setShowSidebar}
                    showSidebar={showSidebar}
                    showingNavigationDropdown={showingNavigationDropdown}
                    setShowingNavigationDropdown={setShowingNavigationDropdown}
                    user={user}
                />
                {header && (
                    <header className="bg-white shadow dark:bg-gray-800">
                        <div className="px-4 py-6 mx-auto max-w-[96rem] sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main className="flex flex-col w-full h-full bg-white grow dark:bg-gray-900">
                    {children}
                </main>
            </div>
        </div>
    );
}
