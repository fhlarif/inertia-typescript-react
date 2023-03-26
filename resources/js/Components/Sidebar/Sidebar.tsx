type Props = {
    showSidebar: boolean;
};

const Sidebar = ({ showSidebar }: Props) => {
    console.log("render from sidebar!");
    return (
        <aside
            className={`${
                showSidebar ? "sm:flex hidden flex-col grow" : "hidden"
            } p-4 w-full max-w-[12rem] lg:max-w-[16rem] bg-gray-800 fixed min-h-full text-gray-200`}
        >
            {<p>Heloo There</p>}
        </aside>
    );
};

export default Sidebar;
