import { useForm } from "react-hook-form";
import { AppBarLayout } from "../../components/appbar-layout";
import { Input } from "../../components/input";
import { api } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export function MemberRegistration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm();

  const navigate = useNavigate();

  const createUser = async (value) => {
    const { data } = await api.post("members", value);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/");
  };

  return (
    <AppBarLayout>
      <div className="flex flex-col items-center w-full ">
        <div className="text-center font-bold text-primary-dark text-[35px] mb-[26px] mt-[86px]">
          Welcome to Satori
        </div>
        <form
          onSubmit={handleSubmit(createUser)}
          className="h-full w-[480px] flex justify-center flex-col items-center gap-3"
        >
          <Input
            register={register("email", { required: true })}
            required
            placeholder="invited@workmail.com"
            label="Work email"
          />
          <Input
            register={register("firstName", { required: true })}
            required
            placeholder="First name"
            label="First name"
          />
          <Input
            register={register("lastName", { required: true })}
            required
            placeholder="Last name"
            label="Last name"
          />
          <Input
            register={register("password", { required: true, minLength: 8 })}
            required
            placeholder="Min. 8 characters"
            label="Password"
          />
          <Input
            required
            register={register("cPassword", {
              required: true,
              minLength: 8,
              validate: (value) => {
                if (watch("password") !== value) {
                  return "Password did not matched";
                }
              },
            })}
            placeholder="Min. 8 characters"
            label="Confirm password"
          />
          <button
            disabled={!isValid}
            className={`btn mt-2 ${
              isValid ? "bg-primary" : "bg-gray-300"
            }  w-[300px]`}
          >
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
