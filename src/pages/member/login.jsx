import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/satori_logo_text.png";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { api } from "../../utils/axios";
import { useLocalUser } from "../../hooks";
import { MainLayout } from "../../components/main-layout";
export function MemberLogin() {
  const { register, formState, handleSubmit } = useForm();
  const { user, setUser } = useLocalUser();
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const user = await api
        .post("/members/login", data)
        .then((res) => res.data);
      console.log(user);
      setUser(user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img src={logo} alt="" />
      <div className="mt-14 mb-5 font-semibold">login</div>
      <form
        action=""
        className="w-[480px] gap-4 flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleLogin)}
      >
        <Input
          placeholder={"Email address"}
          register={register("email", { required: true })}
          label={"Email address"}
        />
        <Input
          placeholder={"Password"}
          register={register("password", { required: true, minLength: 8 })}
          label={"Password"}
        />
        <button
          className={`btn mt-1 ${
            formState.isValid ? "bg-primary" : "bg-gray-300"
          } w-[300px]`}
        >
          Login
        </button>
      </form>
      <button className="underline p-2.5">Forget password</button>
      <div>
        Don't have an account?{" "}
        <Link to={"/member/register"} className="underline">
          Create one
        </Link>
      </div>
      <button className="underline p-2.5 mt-9 font-semibold">
        Login as care provider
      </button>
    </div>
  );
}
