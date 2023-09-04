import profile from "../assets/profile.png";
export function CareProviderCard() {
  return (
    <div className="w-[32.4rem] h-[33.2rem] border-1 border-grey rounded-[2rem] p-[3rem] pl-[2.3rem]">
      <div className="flex gap-[1.5rem]">
        <img src={profile} className="w-[9rem] h-[9rem]" alt="" />
        <div>
          <div className="text-[2rem] font-bold text-primary-dark">
            Dr. Jane Doe, M.Psi.
          </div>
          <div>Spesialis</div>
          <div>
            <div>Rp.xxx.xxx</div>
            <div>FREE</div>
          </div>
        </div>
      </div>
      <div>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation{" "}
      </div>
      <button>View details</button>
    </div>
  );
}
