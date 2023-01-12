import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div id="home">
          <img src="" alt="I see you're an XKCD fan as well."/>
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
              src="https://raw.githubusercontent.com/jjayeon/jjayeon.github.io/main/projects.png"
              alt="This is the last Easter egg. I'm too lazy to add more."
            />
          </Link>
        </div>
    );
}
