import Link from "next/link";

// Homepage component
export default function Home() {
  return (
    <main>
      {/* Navigation bar */}
      <nav>
        <h2>My Portfolio</h2>

        <div>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/about">About</Link>
          {" | "}
          <Link href="/projects">Projects</Link>
          {" | "}
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      {/* Introduction section */}
      <section>
        <h1>Hello, I'm Abdi</h1>
        <h2>Full Stack Developer</h2>

        <p>
          Welcome to my portfolio website. I am passionate about building modern
          websites and applications using React, Next.js, JavaScript, and
          TypeScript.
        </p>

        <Link href="/projects">View My Projects</Link>
      </section>

      {/* Skills section */}
      <section>
        <h2>My Skills</h2>

        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>Next.js</li>
        </ul>
      </section>
    </main>
  );
}
