import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-0 mb-2">
        <h1 className="text-2xl font-semibold">Adrian Johansson</h1>
        <i className="text-sm">
          <Link href="https://github.com/adrjo">adrjo</Link>
          {` / `}
          <Link href="https://github.com/thelampgod">thelampgod</Link>
        </i>
      </div>
      <b>Software Developer</b><br />
      <small>Java • TypeScript • Spring Boot • PostgreSQL • Next.js</small>

      <div className="my-2">
        <p>Software developer from Örebro, Sweden. I like building cool stuff.</p>
        <p>Interest in game modding and cybersecurity.</p>
      </div>

      <Link href="/projects"><b>Projects →</b></Link>

      <div className="my-2">
        Email: <Link href="mailto:adrian@adrjo.dev">adrian@adrjo.dev</Link><br />
        <Link href="https://www.linkedin.com/in/adrian-johansson-7b0962294/">LinkedIn</Link>
      </div>

    </main>
  );
}
