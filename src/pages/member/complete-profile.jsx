import { AppBarLayout } from "../../components/appbar-layout";
import profile from "../../assets/profile_alt.png";
import { Input } from "../../components/input";

export function CompleteProfile() {
  return (
    <AppBarLayout>
      <div>
        <div>Complete your profile</div>
        <img src={profile} alt="" />
        <button className="btn">Change profile</button>
        <form action="">
          <Input placeholder="Country" label="Country" />
          <Input placeholder="Language" label="Language" />
          <button className="btn bg-primary">Complete</button>
        </form>
      </div>
    </AppBarLayout>
  );
}
