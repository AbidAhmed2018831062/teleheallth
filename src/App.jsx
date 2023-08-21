import "./App.css";
import { Dashboard } from "./pages/member/dashboard";
import { MemberRegistration } from "./pages/member/registration";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/member/register" element={<MemberRegistration/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
