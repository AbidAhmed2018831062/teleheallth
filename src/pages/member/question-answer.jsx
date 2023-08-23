import { AppBarLayout } from "../../components/appbar-layout";

export const QuestionAnswer = () => {
  return (
    <AppBarLayout actionText={"cancel"}>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[76rem]">
          <div className="text-[3.5rem] font-bold">
            Let us know your careprovider preference
          </div>
          <div>
            <div></div>
          </div>
          <ol>
            <li>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo ?
              <ul>
                <li>"Lorem ipsum dolor sit amet,</li>
                <li>"Lorem ipsum dolor sit amet,</li>
                <li>"Lorem ipsum dolor sit amet,</li>
                <li>"Lorem ipsum dolor sit amet,</li>
              </ul>
            </li>
          </ol>
          <button>Next</button>
        </div>
      </div>
    </AppBarLayout>
  );
};
