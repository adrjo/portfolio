import Link from "next/link";
import Image from "next/image";

export default function ArchiveMap() {
    return (
        <>
            <Link href="/projects">← Back</Link>
            <main className="flex flex-col gap-2 w-full max-w-2xl mx-auto py-10">
                <h1 className="text-3xl font-semibold text-center">ArchiveMap</h1>
                <Link target="_blank" href="http://v1ol3t.xyz:3200/map"><b>Demo</b></Link>
                <p>ArchiveMap was the final project for my 2 year Higher Vocational Education in Java Development.</p>
                <p>The system combines visualisation and distribution via data analysis and object storage to produce a web based map interface that allows users to selectively download specific areas of the map.</p>

                <b>Architecture</b>
                <p>The system is split into 3 main components:</p>
                <ul className="list-disc list-inside">
                    <li>Data Analysis - <i>WorldAnalyzer</i> - A CLI application that analyses Minecraft world data and produces a database of the world.</li>
                    <li>API - <i>WorldArchive</i> - Spring Boot backend for data management and APIs</li>
                    <li>Web Interface - <i>ArchiveMap</i> - A Next.js web application with interactive tile-based map visualization and selective region download functionality.</li>
                </ul>
                <Link href="/archivemap/architecture.png">
                    <Image src="/archivemap/architecture.png" alt="ArchiveMap Architecture" width={800} height={400} className="mx-auto my-4" />
                </Link>
                <b>Technologies</b>
                <ul className="list-disc list-inside">
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>TypeScript</li>
                    <li>Next.js</li>
                    <li>PostgreSQL</li>
                    <li>Object Storage</li>
                    <li>Tile-based-rendering</li>
                </ul>

                <b>Gallery</b>
                <Link href="/archivemap/mapinterface.png">
                    <Image src="/archivemap/mapinterface.png" alt="ArchiveMap Web Interface" width={800} height={400} className="mx-auto my-4" />
                </Link>
                <Link href="/archivemap/selection.png">
                    <Image src="/archivemap/selection.png" alt="ArchiveMap Select World Screen" width={800} height={400} className="mx-auto my-4" />
                </Link>
                <Link href="/archivemap/WorldAnalyzer.jpeg">
                    <Image src="/archivemap/WorldAnalyzer.jpeg" alt="WorldAnalyzer command line" width={800} height={400} className="mx-auto my-4" />
                </Link>
                <Link href="/archivemap/live.gif">
                    <Image src="/archivemap/live.gif" alt="ArchiveMap Live Example" width={800} height={400} className="mx-auto my-4" />
                </Link>
            </main>
        </>
    )
}