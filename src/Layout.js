import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div>
          <TopBar />
          <h1>
            <Link to="/">Autumn Chiu</Link>
          </h1>
          <Outlet />
          <BottomBar />
        </div>
    );
}

function TopBar() {
    return (
        <ul id="top">
          <Link to="about"> <li>About</li> </Link>
          <Link to="programming"> <li>Programming</li> </Link>
          <Link to="tutoring"> <li>Tutoring</li> </Link>
          <Link to="keepsake"> <li>Keepsake</li> </Link>
          <Link to="editing"> <li>Editing</li> </Link>
        </ul>
    );
}

function BottomBar() {
    return (
        <ul id="bottom">
          <li>autumn.chiu.136 [at] gmail.com</li>
          <a href="https://github.com/jjayeon">
            <li>My GitHub</li>
          </a>
          <a href="https://github.com/jjayeon/jjayeon.github.io">
            <li>Source</li>
          </a>
        </ul>
    );
}
