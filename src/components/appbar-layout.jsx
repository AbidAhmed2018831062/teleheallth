import logo from "../assets/satori_logo_text.png";
export function AppBarLayout({
  children,
  actionText,
  onActionClick = () => null,
}) {
  return (
    <section className="h-full w-full pt-21">
      <div className="fixed top-0 left-0 h-21 px-20 w-full z-20 flex justify-between items-center shadow-[#D9D9D9] shadow-md bg-base">
        <img width={158} height={31} src={logo} alt="" />
        <div>
          {actionText && <button onClick={onActionClick}>{actionText}</button>}
        </div>
       </div>
      {children}
    </section>
  );
}
