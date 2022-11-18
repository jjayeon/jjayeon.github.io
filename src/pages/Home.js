import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div id="home">
          <p>
            Hi, I'm Autumn. Humanities major, self-taught programmer, and game aficionado.  Currently playing League of Legends.
          </p>
          <p>
            If you want to hire me to write code, check out my Projects above.  If you want to hire me as a tutor, click Tutoring right next to it.  For other questions and inquiries, my email address is at the bottom right, and my inbox is always open.
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
