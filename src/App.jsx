import "./App.css";
import { CareProviders } from "./pages/member/care-providers";
import { EditPassword } from "./pages/member/change-password";
import { CompleteProfile } from "./pages/member/complete-profile";
import { Dashboard } from "./pages/member/dashboard";
import { EditProfile } from "./pages/member/edit-profile";
import { MemberLogin } from "./pages/member/login";
import { QuestionAnswer } from "./pages/member/question-answer";
import { MemberRegistration } from "./pages/member/registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/member/register" element={<MemberRegistration />} />
          <Route
            path="/member/complete-profile"
            element={<CompleteProfile />}
          />
          <Route path="/preferences" element={<QuestionAnswer />} />
          <Route path="/care-providers" element={<CareProviders />} />
          <Route path="/member/login" element={<MemberLogin />} />
          <Route path="/member/change-password" element={<EditPassword />} />
          <Route
            path="/member/edit-profile"
            element={<CompleteProfile isEditProfile={true} />}
          />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
