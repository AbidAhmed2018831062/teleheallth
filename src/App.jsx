import "./App.css";
import { CompleteProfile } from "./pages/member/complete-profile";
import { Dashboard } from "./pages/member/dashboard";
import { QuestionAnswer } from "./pages/member/question-answer";
import { MemberRegistration } from "./pages/member/registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
