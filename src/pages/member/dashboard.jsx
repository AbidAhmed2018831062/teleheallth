import { useEffect } from "react";
import { MainLayout } from "../../components/main-layout";
import { useNavigate } from "react-router-dom";

export function Dashboard({}) {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/member/register");
    }
  }, []);
  return (
    <MainLayout title={"Dashboard"}>
      <div>hi</div>
    </MainLayout>
  );
}
