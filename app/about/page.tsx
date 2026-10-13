import Link from "next/link";

// About page component
export default function About() {
  return (
    <main>
      {/* Navigation */}
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

      {/* About section */}
      <section>
        <h1>About Me</h1>
        <h2>Hello, I'm Abdi</h2>

        <p>
          I am a passionate developer who enjoys creating modern web
          applications. I work with HTML, CSS, JavaScript, TypeScript, React,
          and Next.js.
        </p>

        <p>
          I enjoy learning new technologies, solving problems, and building
          useful digital products.
        </p>
      </section>

      {/* Technical skills */}
      <section>
        <h2>My Technical Skills</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>
      </section>
    </main>
  );
}
