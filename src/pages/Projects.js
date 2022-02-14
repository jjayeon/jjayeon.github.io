import { Routes, Route, Link, useParams } from "react-router-dom";
import info from "./project-info.json";

export default function Projects() {
    return (
        <Routes>
            <Route index element={<Index />} />
            <Route path=":id" element={<Project />} />
        </Routes>
    );
}

function Index() {
    let projects = [];
    for (let id in info) {
        projects.push(
            <li key={id}>
                <Link to={id}>{info[id].title}</Link>
            </li>
        );
    }
    return (
        <div>
            <ul>{projects}</ul>
        </div>
    );
}

function Project() {
    let params = useParams();
    let project = info[params.id];
    let iframe = "";
    if (project.url !== undefined) {
        iframe = (
            <iframe
                title={params.id}
                src={project.url}
                width="100%"
                height="600"
                frameborder="0"
                scrolling="no"
            />
        );
    }
    return (
        <div>
            <h2>{project.title}</h2>
            {iframe}
            <p>{project.long_desc}</p>
            <a href={project.giturl}>Source</a> |{" "}
            <Link to="/projects">See all projects</Link>
        </div>
    );
}
