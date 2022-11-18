import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tutoring from "./pages/Tutoring";

export default function App() {
    return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects/*" element={<Projects />} />
            <Route path="tutoring" element={<Tutoring />} />
          </Route>
        </Routes>
    );
}
