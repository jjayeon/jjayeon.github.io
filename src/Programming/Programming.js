import { Routes, Route, Link, useParams } from "react-router-dom";
import info from "./project-info.json";
import "./programming.css";

export default function Programming() {
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
            <ProjectLink
              key={id}
              to={id}
              title={info[id].title}
              img={info[id].img}
              desc={info[id].desc}
            />
        );
    }
    return <div id="programming">
             <p>[EDIT] add some copy here; also business impact </p>
             <p>I have the most professional experience in <b>Javascript</b>, but I can work in any modern programming language, including <b>Go, Python, Java, C, OCaml, and Lisp.</b> I also have extensive experience with <b>Linux systems</b>, having worked exclusively in Linux environments since high school. </p>
             {projects}
           </div>;
}

function ProjectLink(props) {
    return (
        <div>
          <h3>
            <Link to={props.to}>{props.title}</Link>
          </h3>
          <ul>
            {props.img !== undefined && (
                <Link to={props.to}>
                  <img src={props.img} alt="demo of project" />
                </Link>
            )}
            <p>{props.desc}</p>
          </ul>
        </div>
    );
}

function Project() {
    let params = useParams();
    let project = info[params.id];
    return (
        <div>
          <h2>{project.title}</h2>
          {project.url && (
              <iframe
                title={params.id}
                src={project.url}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
              />
          )}
          <p>{project.long_desc}</p>
          <a href={project.giturl}>Source</a> |{" "}
          <Link to="/programming">See all projects</Link>
        </div>
    );
}
