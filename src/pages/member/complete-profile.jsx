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
import { MainLayout } from "../../components/main-layout";

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

export function CompleteProfile({ isEditProfile }) {
  const { register, handleSubmit } = useForm();
  const { user, setUser } = useLocalUser();
  const navigate = useNavigate();
  const completeProfile = async ({
    dd,
    yyyy,
    mm,
    country,
    language,
    image,
    fullName,
  } = {}) => {
    const dob =
      dd !== "DD" && mm !== "MM" && yyyy !== "YYYY"
        ? new Date(`${dd}-${mm}-${yyyy}`)
        : null;
    if (dob || country || language || image) {
      const formData = new FormData();
      if (image) formData.append("image", image[0]);
      if (country !== "Country") formData.append("country", country);
      if (language !== "Language") formData.append("language", language);
      if (dob) formData.append("dob", dob);
      if (fullName) formData.append("fullName", fullName);
      try {
        const profile = await api
          .put(`members/${user._id}/edit`, formData)
          .then((r) => r.data);
        setUser({ ...user, ...profile });
        if (!isEditProfile) navigate("/");
      } catch (err) {}
    }
  };

  const Layout = isEditProfile ? MainLayout : AppBarLayout;

  return (
    <Layout>
      <div className="flex flex-col gap-6 justify-center items-center p-24">
        <h1 className=" text-[35px] font-bold">Complete your profile</h1>
        <img src={profile} alt="" />
        <form
          onSubmit={handleSubmit(completeProfile)}
          className="flex flex-col justify-center items-center w-[482px] gap-[15px]"
        >
          <label
            htmlFor="ProfileCompleteImage"
            className="btn bg-primary p-[10px] rounded-[10px]"
          >
            Change profile
          </label>
          <input
            id="ProfileCompleteImage"
            className="hidden"
            type="file"
            accept="image/*"
            {...register("image")}
          ></input>
          {isEditProfile && (
            <Input
              register={register("fullName")}
              placeholder={user?.firstName + " " + user?.lastName}
              label={"Full name"}
            ></Input>
          )}
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
            placeholder={user.country || "Country"}
            label="Country"
            options={countries.map((country) => country.name)}
          />
          <Select
            register={register("language")}
            placeholder={user.languages[0] || "Language"}
            label="Language"
            options={Object.values(languages).map((l) => l.name)}
          />
          {!isEditProfile ? (
            <button className="btn bg-primary w-[300px] mt-[2rem]">
              Continue
            </button>
          ) : (
            <div className=" w-full flex justify-end">
              <button className="btn  bg-primary  mt-[2rem]">
                Save changes
              </button>
            </div>
          )}
        </form>
      </div>
    </Layout>
  );
}
