import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
    return (
        <div id="home">
          <img
            src="https://raw.githubusercontent.com/jjayeon/jjayeon.github.io/main/website%20pic.jpg"
            alt="I see you're an XKCD fan as well."
          />
          <p>
            Hi, I’m Autumn: programmer, tutor, and writer. I’ve taught myself pretty much everything I know about coding, and I’ve used my knowledge both to deliver business impacts and help the younger generation of programmers learn and grow. For more on my programming work and its business impacts, click <Link to="/programming">here</Link>.
          </p>
          <p>
            Aside from slinging code, I also tutor in <b>Computer Science, Physics, Mathematics, and English.</b> I am intimately familiar with the process of learning, and I take pride in understanding how my students think and playing to their strengths to help them reach their full potential. For more on my tutoring experience and philosophy, click <Link to="/tutoring">here.</Link>
          </p>
          <p>
            Finally, I volunteer in a few capacities for local communities and colleagues. I'm the blog writer and video producer for <a href="https://keepsakehouse.com">Keepsake House</a>, a volunteer-run organization dedicated to showcasing underrepresented musical talent around NYC. I also provide free editorial services for both undergraduate- and graduate-level written work; I have helped my colleagues secure various grants and scholarships, including one Fulbright scholarship. Click <Link to="/keepsake">here</Link> for more on Keepsake House, and <Link to="/editing">here</Link> for more on editing.
          </p>
        </div>
    );
}
