import { AppBarLayout } from "../../components/appbar-layout";
import { Input } from "../../components/input";

export function MemberRegistration() {
  return (
    <AppBarLayout>
      <div className="flex flex-col items-center w-full ">
        <div className="text-center font-bold text-primary-dark text-[35px] mb-[26px] mt-[86px]">
          Welcome to Satori
        </div>
        <form className="h-full w-[480px] flex justify-center flex-col items-center gap-3">
          <Input
            required
            placeholder="invited@workmail.com"
            label="Work email"
          />
          <Input required placeholder="First name" label="First name" />
          <Input required placeholder="Last name" label="Last name" />
          <Input required placeholder="Min. 8 characters" label="Password" />
          <Input
            required
            placeholder="Min. 8 characters"
            label="Confirm password"
          />
          <button className="btn mt-2 bg-gray-300 w-[300px]">
            Create account
          </button>
        </form>
        <div className="flex py-[10px]">
          Already have an account?
          <button className="underline">Login</button>
        </div>
        <div className="mt-[20px]">By signing up, I agree to SATORI’s</div>
        <div className="flex gap-1">
          <button className=" underline">Terms of Service</button>{" "}
          <span> and </span>
          <button className="underline">Privacy Policy.</button>
        </div>
      </div>
    </AppBarLayout>
  );
}
