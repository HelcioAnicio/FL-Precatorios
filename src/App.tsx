import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/privacyPolicy";
import CookieConsent from "./components/cookieConsent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
      </Routes>
      <CookieConsent />
    </Router>
  );
}

export default App;
