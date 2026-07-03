import Link from "next/link";
import Image from "next/image";

export default function WorldBadger() {
    return (
        <>
            <Link href="/projects">← Back</Link>
            <main className="flex flex-col gap-2 w-full max-w-2xl mx-auto py-10">
                <h1 className="text-3xl font-semibold text-center">WorldBadger</h1>
                <Link href="https://github.com/thelampgod/WorldBadger"><b>GitHub</b></Link>

                <p>WorldBadger is a command line utility for analysing Minecraft worlds. It was started from a need for a new tool for data analysis on Minecraft worlds newer than 1.12.2.</p>
                <p>WorldBadger is written in Java. It implements several different output modes, including CSV and database output.</p>
                <p>While still in development, WorldBadger is already a powerful tool for analysing Minecraft worlds. It can be used to find the location of specific blocks in the world or anomalies like illegal block states such as half-doors and broken data entities.</p>

                <b>Technologies</b>
                <ul className="list-disc list-inside">
                    <li>Java</li>
                    <li>SQLite</li>
                </ul>
                <b>Gallery</b>
                <Link href="/worldbadger/WorldBadger-CLI.png">
                    <Image src="/worldbadger/WorldBadger-CLI.png" alt="WorldBadger command line" width={800} height={400} className="mx-auto my-4" />
                </Link>
                <Link href="/worldbadger/run.png">
                    <Image src="/worldbadger/run.png" alt="WorldBadger command line run" width={800} height={400} className="mx-auto my-4" />
                </Link>
                <Link href="/worldbadger/results.png">
                    <Image src="/worldbadger/results.png" alt="WorldBadger results in csv mode" width={800} height={400} className="mx-auto my-4" />
                </Link>
            </main>
        </>
    )
}