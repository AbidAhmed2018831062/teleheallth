import logo from "../../assets/satori_logo_text.png";
import { Input } from "../../components/input";
export function MemberLogin() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img src={logo} alt="" />
      <div className="mt-14 mb-5 font-semibold">login</div>
      <form
        action=""
        className="w-[480px] gap-4 flex flex-col justify-center items-center"
      >
        <Input placeholder={"Email address"} label={"Email address"} />
        <Input placeholder={"Password"} label={"Password"} />
        <button className="btn mt-1 bg-gray-300 w-[300px]">Login</button>
      </form>
      <button className="underline p-2.5">Forget password</button>
      <div>
        Don't have an account? <button className="underline">Create one</button>
      </div>
      <button className="underline p-2.5 mt-9 font-semibold">
        Login as care provider
      </button>
    </div>
  );
}
