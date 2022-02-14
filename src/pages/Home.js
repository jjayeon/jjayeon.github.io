import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <p id="about">
                Hi, I'm Autumn. Humanities major, self-taught programmer, and
                avid chess player. If you're here from my resume, check out my
                coding Projects below; if you're not, how'd you get here? Shoot
                me an email to let me know.
            </p>
            <h1>
                <Link to="projects">Projects</Link>
            </h1>
        </div>
    );
}
