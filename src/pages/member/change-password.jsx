import { useForm } from "react-hook-form";
import { Input } from "../../components/input";
import { MainLayout } from "../../components/main-layout";
import { api } from "../../utils/axios";
import { useLocalUser } from "../../hooks";
import { toast } from "react-toastify";

export function EditPassword() {
  const { register, formState, handleSubmit, watch } = useForm();
  const { user } = useLocalUser();

  const handleChangePassword = async (data) => {
    try {
      console.log(data);
      await api.patch(`/members/${user._id}/change-password`, data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainLayout title={"Change password"}>
      <div className="w-[65.1rem] ml-[5.3rem] mt-[3.4rem]">
        <h1 className="text-[3.5rem] font-[600] mb-[4.5rem]">
          Change Password
        </h1>
        <form
          action=""
          onSubmit={handleSubmit(handleChangePassword)}
          className="flex flex-col items-end gap-[1.5rem] w-full"
        >
          <Input
            register={register("oldPassword", { required: true, minLength: 8 })}
            placeholder="Your password"
            label="Old password"
          />
          <Input
            register={register("newPassword", { required: true, minLength: 8 })}
            placeholder="Min 8 charecters"
            label="New password"
          />
          <Input
            register={register("confirmPassword", {
              required: true,
              minLength: 8,
              validate: (value) => {
                if (watch("newPassword") !== value) {
                  return "Password did not matched";
                }
              },
            })}
            placeholder="Min 8 charecters"
            label="Confirm new password"
          />
          <button
            className={`align-baseline w-max btn ${
              formState.isValid ? "bg-primary" : "bg-gray-300"
            }`}
          >
            Change password
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
