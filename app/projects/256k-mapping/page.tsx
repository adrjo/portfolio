import Link from "next/link";
import Image from "next/image";

export default function MappingProject() {
    return (
        <>
            <Link href="/projects">← Back</Link>
            <main className="flex flex-col gap-2 w-full max-w-2xl mx-auto py-10">
                <h1 className="text-3xl font-semibold text-center">256k Mapping Project</h1>
                <p>The 256k Mapping Project was a community-driven effort to archive a 256,000 x 256,000 block area of the Minecraft server 2b2t. The project resulted in approximately <b>1.1 TiB</b> of world data collected over nearly a year by dozens of contributors using automated clients.</p>
                <p>I acted as one of the primary contributors and project lead, coordinating work across contributors while also developing several of the project's core tools and visualizations.</p>

                <p>My contributions included:</p>
                <ul className="list-disc list-inside">
                    <li>Developed the primary spiral exploration tool (Minecraft Forge mod) used to download world data.</li>
                    <li>Coordinated contributors through a shared planning system that tracked ownership and progress of mapping regions.</li>
                    <li>Developed the <Link target="_blank" href="https://hobune.stream/256k">interactive version map</Link> and generated large-scale visualizations of world generation history.</li>
                    <li>Produced <Link target="_blank" href="https://www.youtube.com/watch?v=tIWor-c2H24">animated timeline visualizations</Link> showing how the world expanded across Minecraft versions.</li>
                </ul>

                <b>Technologies</b>
                <ul className="list-disc list-inside">
                    <li>Java</li>
                    <li>GDAL2Tiles</li>
                    <li>OpenLayers</li>
                    <li>Data processing</li>
                    <li>Visualization</li>
                </ul>

                <b>More resources</b>
                <ul className="list-disc list-inside">
                    <li><Link target="_blank" href="https://www.reddit.com/r/2b2t/comments/t287n9/1170gb_of_2b2t_256000%C2%B2_mapping_project_info/">Reddit Post</Link></li>
                    <li><Link target="_blank" href="https://hobune.stream/256k">Version Map Website</Link></li>
                    <li><Link target="_blank" href="https://www.youtube.com/watch?v=Nzdqtq62qJk">Reveal video (YouTube, 500k views)</Link></li>
                    <li><Link target="_blank" href="https://www.youtube.com/watch?v=tIWor-c2H24">Timeline video (YouTube, 50k views)</Link></li>
                </ul>

                <b>Gallery</b>
                <Link href="/256k/256k.webp">
                    <Image src="/256k/256k.webp" alt="Project reveal render" width={800} height={400} className="mx-auto my-4" />
                </Link>
            </main>
        </>
    )
}