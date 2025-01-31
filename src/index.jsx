import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainView } from "./components/main-view/main-view";
import { LoginView } from "./components/login-view/login-view";
import { SignupView } from "./components/signup-view/signup-view";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<SignupView />} />
      </Routes>
    </Router>
  );
};
