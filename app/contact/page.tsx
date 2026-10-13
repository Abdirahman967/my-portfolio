import Link from "next/link";

// Contact page component
export default function Contact() {
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

      {/* Contact information */}
      <section>
        <h1>Contact Me</h1>
        <h2>Let's Work Together!</h2>

        <p>
          I am always open to discussing new projects, creative ideas, and
          opportunities.
        </p>

        <p>Location: Nairobi, Kenya</p>

        <p>Email: hello@khalifzokhalif.com</p>

        {/* Email button */}
        <a href="mailto:hello@khalifzokhalif.com">Send Me an Email</a>
      </section>
    </main>
  );
}
