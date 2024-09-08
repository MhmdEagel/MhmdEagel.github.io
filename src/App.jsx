import React from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./page/Home";
import About from "./page/About";
import Projects from "./page/Projects";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>    
  );
}
