import { AppBarLayout } from "../../components/appbar-layout";
import profile from "../../assets/profile_alt.png";
import { Input } from "../../components/input";
import { Select } from "../../components/select";
import { useForm } from "react-hook-form";
import { api } from "../../utils/axios";
import { useLocalUser } from "../../hooks";
import countries from "../../json/countries.json";
import languages from "../../json/languages.json";
import { useNavigate } from "react-router-dom";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function CompleteProfile() {
  const { register, handleSubmit } = useForm();
  const user = useLocalUser();
  const navigate = useNavigate();
  const completeProfile = async ({ dd, yyyy, mm, country, language } = {}) => {
    const dob = dd && mm && yyyy ? new Date(`${dd}-${mm}-${yyyy}`) : null;
    if (dob || country || language) {
      await api.put(`members/${user._id}`, { dob, country, language });
    }
    navigate("/");
  };

  return (
    <AppBarLayout>
      <div className="flex flex-col gap-6 justify-center items-center p-24">
        <h1 className=" text-[35px] font-bold">Complete your profile</h1>
        <img src={profile} alt="" />
        <button className="btn bg-primary p-[10px] rounded-[10px]">
          Change profile
        </button>
        <form
          onSubmit={handleSubmit(completeProfile)}
          action=""
          className="flex flex-col justify-center items-center w-[482px] gap-[15px]"
        >
          <div className="w-full">
            Date of birth
            <div className="flex gap-[20px] w-full">
              <Select
                register={register("dd")}
                placeholder="DD"
                options={new Array(31).fill(1).map((v, i) => i + 1)}
              />
              <Select
                register={register("mm")}
                placeholder="MM"
                options={months}
              />
              <Select
                register={register("yyyy")}
                placeholder="YYYY"
                options={new Array(100)
                  .fill(null)
                  .map((v, i) => +new Date().getFullYear() - i)}
              />
            </div>
          </div>
          <Select
            register={register("country")}
            placeholder="Country"
            label="Country"
            options={countries.map((country) => country.name)}
          />
          <Select
            register={register("language")}
            placeholder="Language"
            label="Language"
            options={Object.values(languages).map((l) => l.name)}
          />
          <button className="btn bg-primary w-[300px]">Continue</button>
        </form>
      </div>
    </AppBarLayout>
  );
}
