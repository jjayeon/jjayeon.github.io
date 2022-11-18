import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div id="about">
          <p>
            Hi, I'm Autumn. Humanities major, self-taught programmer, and
            avid chess player. If you're here from my resume, check out my
            coding projects below; if you're not, how'd you get here? Shoot
            me an email to let me know.
          </p>
          <h3>
            <Link to="projects">Projects</Link>
          </h3>
          <Link to="projects">
            <img
              src="https://raw.githubusercontent.com/jjayeon/my-website-2/main/projects.png"
              alt="projects"
            />
          </Link>
        </div>
    );
}
