import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Programming from "./Programming/Programming";
import Projects from "./Projects/Projects";
import Tutoring from "./Tutoring/Tutoring";
import Keepsake from "./Keepsake/Keepsake";

export default function App() {
    return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}/>
            <Route path="programming" element={<Programming />}/>
            <Route path="projects/*" element={<Projects />}/>
            <Route path="tutoring" element={<Tutoring />}/>
            <Route path="keepsake" element={<Keepsake />}/>
          </Route>
        </Routes>
    );
}
