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
             <p>
               While I have a deep appreciation for computer systems and algorithms in the abstract, I still think of myself as a business-first engineer; I do my best work when I have a clear understanding of the business impact of the code and systems I design. In working with SwagUp, I've seen firsthand the fine tightrope that a successful business walks, and the tradeoffs between innovation, stability, market forces, and working-hours that are constantly being made. As such, here's a quick overview of my business impact at SwagUp.
             </p>
             <h3>Redeem Pages</h3>
             <p>
               My biggest contribution was in taking over the management of a legacy system that used <b>Wix, Typeform, and Zapier</b> to process customer information and ship orders. From a technical perspective, this work was not very impressive, since it involved so many low-code tools with no room for improvement or automation. But from a business perspective, it was vital—there were customer requests that had been queued for months when I joined, and I was the only one at the company with both the technical knowledge and grit to handle them. By the time I left, I had thoroughly documented all the mechanics of the redeem page system and trained several of my coworkers on how it works, reducing the turnaround time for a request to a day or two at most.
             </p>
             <h3>Cloudfront proxy server</h3>
             <p>
               This project was spearheaded by a senior programmer at SwagUp. Essentially, the marketing team at SwagUp wanted to iterate more quickly in making changes to the homepage, but they didn't have the technical knowledge to edit our React frontend directly. There were a variety of proposals for bridging that gap, but all of them involved a substantial engineering lift, and we wanted to choose the least disruptive solution. My role in this transition was to facilitate communication between the senior programmer and leadership; I went over the technical details with him thoroughly, got a clear understanding of the tradeoffs of the different solutions, and wrote up presentations that brought across those tradeoffs concisely and efficiently to leadership.
             </p>
             <h3>Shopify Management through Node</h3>
             <p>
               Finally, I wrote a tool that diagnosed and repaired various issues with our Shopify integration. Our system for processing Shopify orders was somewhat disorganized, and frequently we would lose track of orders that failed due to lack of stock or other errors. It was possible to retry orders manually via command-line, but it was infeasible to keep track of thousands of orders to retry by hand; so while working on Shopify-related tickets as they popped up, I also spent time studying the AWS documentation to find a way to automate the process. When the work was complete, I had turned a time-consuming, repetitive task into something that could be fixed with a single command.
             </p>
             <div id="projects">{projects}</div>
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
