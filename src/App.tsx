import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioLayout from "./components/PortfolioLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PhotographeMarrakech from "./pages/PhotographeMarrakech";

export default function App() {
  return (
    <Router>
      <PortfolioLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/photographe-marrakech" element={<PhotographeMarrakech />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PortfolioLayout>
    </Router>
  );
}
