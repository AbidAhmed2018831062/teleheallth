import logo from "../assets/satori_logo_text.png";
import bell from "../assets/bell.png";
import profile from "../assets/profile.png";
import { ChatIcon, DashboardIcon } from "../icons";
import { useState } from "react";
const navOptions = (selected) => [
  {
    title: "Dashboard",
    icon: <DashboardIcon color={selected == "Dashboard" ? "white" : "black"} />,
    link: "",
  },
  {
    title: "Chats",
    icon: <ChatIcon color={selected == "Chats" ? "white" : "black"} />,
    link: "",
  },
];

export function MainLayout({ children, title }) {
  const [selected, setSelected] = useState("Dashboard");
  return (
    <main className="w-full h-full flex">
      <aside className="border-r-1 border-r-gray-300  w-[17%] px-4 py-12 h-screen sticky top-0">
        <img className="ml-1" src={logo} alt="" />
        <div className=" mt-14">
          {navOptions(selected).map((option) => (
            <div
              className={`p-[10px] hover:bg-slate-200 cursor-pointer mb-1 rounded-[10px] gap-4 items-center font-primary-dark flex ${
                selected === option.title
                  ? "bg-primary text-white fill-white"
                  : ""
              }`}
              onClick={() => setSelected(option.title)}
            >
              {option.icon}
              {option.title}
            </div>
          ))}
        </div>
      </aside>
      <div className="flex-1">
        <header className="flex px-12 h-28 w-full justify-between items-center">
          <h2 className="font-bold text-[20px]">{title}</h2>
          <div className="flex gap-10 items-center">
            <div className="flex">
              <img
                src={bell}
                className="w-[30px] h-[30px]"
                width={30}
                height={30}
                alt=""
              />
              <sup className="p-1 -ml-4 -mt-1 w-7 h-7 text-white text-lg leading-none flex justify-center items-center bg-primary rounded-[100%]">
                2
              </sup>
            </div>
            <img src={profile} alt="" />
          </div>
        </header>
        <section>{children}</section>
      </div>
    </main>
  );
}
