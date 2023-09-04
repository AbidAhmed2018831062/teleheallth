import logo from "../assets/satori_logo_text.png";
import bell from "../assets/bell.png";
import profile from "../assets/profile.png";
import { ChatIcon, DashboardIcon } from "../icons";
import { useState } from "react";
import { useLocalUser } from "../hooks";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
  const { user, setUser, clearUser } = useLocalUser();
  const navigate = useNavigate();

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    clearUser();
    navigate("/member/login");
  };

  return (
    <main className="w-full h-full flex">
      <aside className="border-r-1 border-r-gray-300  w-[17%] px-[1.6rem] py-[4.8rem] h-screen sticky top-0">
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
        <header className="flex px-[4.8rem] h-[10.7rem] w-full justify-between items-center">
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
            <div className="relative">
              <img
                src={user?.profilePicture || profile}
                className="overflow-hidden align-middle w-[65px] h-[65px] rounded-[50%]"
                alt=""
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              />
              {showProfileMenu && (
                <div className="absolute gap-[2rem] p-[2rem] rounded-[2rem] right-0 flex flex-col bg-white shadow-md w-[30.6rem] top-0">
                  <div>
                    <img
                      src={user?.profilePicture || profile}
                      className="overflow-hidden align-middle w-[65px] h-[65px] rounded-[50%]"
                      alt=""
                    />
                  </div>
                  <div className="w-full h-[1px] bg-gray-300"></div>
                  <Link className="w-max" to={"/member/edit-profile"}>
                    Edit profile
                  </Link>
                  <button className="w-max">Payment history</button>
                  <Link className="w-max" to={"/member/change-password"}>
                    Change password
                  </Link>
                  <div className="w-full h-[1px] bg-gray-300"></div>
                  <button className="w-max text-red-600" onClick={handleLogout}>
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
        <section>{children}</section>
      </div>
    </main>
  );
}
