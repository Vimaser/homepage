import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { HomePage, Footer, Header, AboutPage, Portfolio } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* More routes to come you know the drill... */}
      </Routes>
    </Router>
  );
}

export default App;
