import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
          <p>
            Hi, I'm Autumn.  I do and have done a lot of different things, so this is a quick summary of my life so far.
          </p>
          <p>
            I attended Stuyvesant High School from 2011 to 2015, during which time I took several advanced courses, including: AP Physics C (calculus + electromagnetism), AP Calculus BC, AP Computer Science; and some home-grown courses by our CS guru Mike Zamansky: Systems-level Programming, Computer Graphics, and Web Development.  I also participated in Chorus for a year and a half, and still practice singing today.
          </p>
          <p>
            I was accepted into the Cornell School of Engineering in my senior year, which I attended for two years before transferring to the School of Arts and Sciences to pursue a double major in English and Asian Studies.  My decision was motivated by the unique challenges of a humanistic, artistic space; my natural tendency is to gravitate towards the concrete and mathematical, so I wanted to explore my creativity and my insights into other people's creativity.
          </p>
          <p>
            After graduating from Cornell in 2020, I then returned to the land of the sciences, studying programming during the pandemic years to catch up on what I had missed in university.  My studies eventually led me to an opportunity in 2021 with the <a href="https://fellowship.mlh.io">Major League Hacking Fellowship</a>, a program designed to empower students and recent graduates from non-traditional (non-CS) backgrounds in the tech field.  I was accepted into the Fellowship twice, and both times I took on a mentorship role for my younger, less experienced peers.
          </p>
          <p>
            After the Fellowship, I began working for SwagUp, a merchandaise distribution startup, as a software engineer, which you can read more about under <Link to="/programming">Programming</Link>.  My stint at SwagUp lasted from March 2022 to November 2022, at which point I was unfortunately one of many software engineers to be laid off in the tech recession.  I have since been taking time to decompress, focusing on creative self-expression in jazz piano and singing, as well as my work with <Link to="/keepsake">Keepsake House.</Link>
          </p>
        </div>
    );
}
