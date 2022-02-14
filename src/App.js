import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Projects from "./Projects";
import Blog from "./Blog";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="blog" element={<Blog />} />
                </Route>
            </Routes>
        </div>
    );
}
