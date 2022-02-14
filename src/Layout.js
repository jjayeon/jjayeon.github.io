import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <TopBar />
            <Outlet />
            <BottomBar />
        </div>
    );
}

function TopBar() {
    return (
        <ul id="top">
            <Link to="projects">
                <li>Projects</li>
            </Link>
            <Link to="blog">
                <li>Blog</li>
            </Link>
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
            <a href="https://github.com/jjayeon/my-website-2">
                <li>Source</li>
            </a>
        </ul>
    );
}
