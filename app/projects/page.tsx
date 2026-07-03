import ProjectItem from '@/components/project-item';
import Link from 'next/link';

export default function Projects() {
    return (
        <>
            <Link href="/">← Back</Link>
            <main className="flex flex-col gap-2 w-full max-w-2xl mx-auto py-10">
                <h1 className="text-3xl font-semibold text-center">Projects</h1>

                <ul>
                    <ProjectItem
                        title="ArchiveMap"
                        time="January 2026 - Present"
                        description="Distributed system for analyzing and visualizing massive Minecraft worlds."
                        technologies={["Java", "Spring Boot", "Next.js", "PostgreSQL", "Object Storage"]}
                        link="/projects/archivemap"
                    />
                    <ProjectItem
                        title="Snowflake"
                        time="September 2022 - August 2024"
                        description="End-to-end encrypted communication platform with a custom networking protocol."
                        technologies={["Java", "Sockets", "SQLite", "Encryption"]}
                        link="/projects/snowflake"
                    />
                    <ProjectItem
                        title="WorldBadger"
                        time="October 2025 - Present"
                        description="CLI application for analysing Minecraft world data."
                        technologies={["Java", "SQLite"]}
                        link="/projects/worldbadger"
                    />
                    <ProjectItem
                        title="256k Mapping Project"
                        time="October 2020 - February 2022"
                        description="Large-scale collaborative data collection and visualization project."
                        technologies={["Java", "Collaboration", "Automation", "Data Processing", "Visualization"]}
                        link="/projects/256k-mapping"
                    >
                        <Link target="_blank" href="https://www.reddit.com/r/2b2t/comments/t287n9/1170gb_of_2b2t_256000%C2%B2_mapping_project_info/">Reddit Post</Link>
                        <Link target="_blank" href="https://hobune.stream/256k">Version Map Website</Link>
                        <Link target="_blank" href="https://www.youtube.com/watch?v=Nzdqtq62qJk">Reveal video (YouTube, 500k views)</Link>
                        <Link target="_blank" href="https://www.youtube.com/watch?v=tIWor-c2H24">Timeline video (YouTube, 50k views)</Link>

                    </ProjectItem>
                    <ProjectItem
                        title="Snowball"
                        time="January 2021 - 2025"
                        description="Modular client framework using runtime bytecode transformation."
                        technologies={["Java", "Minecraft", "Forge", "Fabric", "Mixin", "SQLite"]}
                        link="/projects/snowball"
                    />
                    <ProjectItem
                        title="BRF Propellern"
                        time="2018/2019"
                        description="Website for BRF Propellern, a housing association."
                        technologies={["WordPress", "PHP", "MySQL", "HTML", "CSS", "JavaScript"]}
                        link="/projects/brf-propellern"
                    />
                    <ProjectItem
                        title="PHP Forum"
                        time="2018/2019"
                        description="Forum software written in PHP and MySQL."
                        technologies={["PHP", "MySQL", "HTML", "CSS", "JavaScript"]}
                        link="https://github.com/adrjo/phpforum"
                    />
                </ul>
            </main>
        </>
    )
}