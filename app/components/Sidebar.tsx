import Image from "next/image";
import {
  IoFileTrayStackedOutline,
  IoLogoReact,
  IoHomeOutline,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const SidebarMenuItems = [
  {
    path: "/dashboard/counter",
    text: "Counter",
    description: "Contador",
    icon: (
      <IoFileTrayStackedOutline className="w-6 h-6"></IoFileTrayStackedOutline>
    ),
  },
  {
    path: "/dashboard/main",
    text: "Home",
    description: "Datos principales",
    icon: <IoHomeOutline className="w-6 h-6"></IoHomeOutline>,
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll flex-shrink-0"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white flex gap-3">
          <span>
            <IoLogoReact></IoLogoReact>
          </span>
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              width={32}
              height={32}
              alt="usuario"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Edward Tompson</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {SidebarMenuItems.map((itemSidebar) => {
          return <SidebarMenuItem {...itemSidebar} key={itemSidebar.path} />;
        })}
      </div>
    </div>
  );
};
