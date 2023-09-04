import { useEffect } from "react";
import { MainLayout } from "../../components/main-layout";
import { useNavigate } from "react-router-dom";
import { useLocalUser } from "../../hooks";

export function Dashboard({}) {
  const navigate = useNavigate();
  const { user, setUser } = useLocalUser();
  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/member/register");
    }
  }, []);
  return (
    <MainLayout title={"Dashboard"}>
      <div className="px-[5.2rem] pt-[2.4rem]">
        <h1 className="mb-[2rem] text-[3.5rem] font-bold">
          Welcome, {user?.firstName}!
        </h1>
        <div className="flex gap-[3.4rem]">
          <div className="p-[3rem] flex flex-col border-1 border-grey rounded-[1rem] w-[34rem] h-[19rem]">
            <div className="text-[2rem] flex-1">Free counseling hours</div>
            <div className="flex items-center gap-[0.8rem]">
              <span className="text-primary  text-[3.5rem] font-bold">5</span>
              <span>Hours</span>
            </div>
            <div>Valid until 10/07/2024</div>
          </div>
          <div className="p-[3rem] flex flex-col bg-primary text-white rounded-[1rem] h-[19rem] w-[34rem]">
            <div>You deserve to be happy!</div>
            <div className="flex-1">Find the right care provider for you.</div>
            <button className="btn bg-white text-primary w-full p-[1rem]">
              Book a session
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
