import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <TopBar />
            <Link to="/">
                <h1>Autumn Chiu</h1>
            </Link>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vestibulum tortor sapien, sit amet porta neque
                faucibus dapibus. Fusce feugiat rutrum eros non sagittis. Morbi
                auctor eros in nisi ullamcorper condimentum ac sed ante.
                Vestibulum a accumsan felis. Fusce vestibulum, lectus id
                interdum auctor, ligula augue euismod sapien, eget fermentum
                odio nibh a diam. Suspendisse sed accumsan urna. Aenean non sem
                et massa sagittis luctus. Nunc at scelerisque ligula. Duis
                consequat, arcu sit amet cursus bibendum, lacus augue malesuada
                quam, eget porta velit ligula non sapien. Vivamus at massa
                porta, pharetra orci non, malesuada ante. Praesent dignissim
                tortor at consectetur suscipit. Aenean sed ante et velit dictum
                dignissim.
            </p>
            <p>
                Ut ac metus tincidunt, sollicitudin justo vitae, rutrum lacus.
                Nulla facilisi. Praesent accumsan ex nibh, sit amet elementum
                ante placerat non. Pellentesque consequat ullamcorper magna nec
                posuere. Proin ac sapien vel urna tempor venenatis ut sit amet
                ante. Donec enim neque, dapibus non efficitur in, euismod et
                erat. Ut faucibus neque neque.
            </p>
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

export default App;
