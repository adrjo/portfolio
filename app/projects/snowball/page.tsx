import Link from "next/link";


export default function Snowball() {
    return (
        <>
            <Link href="/projects">← Back</Link>
            <main className="flex flex-col gap-2 w-full max-w-2xl mx-auto py-10">
                <h1 className="text-3xl font-semibold text-center">Snowball</h1>
                
                <p>Snowball is a closed source forge/fabric mod for Minecraft I developed sporadically from 2021 for myself and a couple friends. It was specifically made for use on <Link target="_blank" href="https://2b2t.org">2b2t</Link>, a so-called anarchy server, where anything goes.</p>

                <p>With Snowball I learnt about Java bytecode manipulation using Mixin for injecting code into Minecraft at runtime and learnt about event based architecture. When migrating the system to Fabric, I implemented my own simple <Link target="_blank" href="https://github.com/thelampgod/EventBus">event bus</Link> for managing subscriptions.</p>
                <p>Snowball features a config and friends system backed by SQLite as well as data collection tools tracking player connections among other things on servers the user vistits.</p>
                <p>Snowball as a base was used for the spiraling bot used in <Link href="/projects/256k-mapping">256k Mapping Project</Link>.</p>

                <b>Main features</b>
                <ul className="list-disc list-inside">
                    <li>Commands system</li>
                    <li>Modular feature system</li>
                    <li>Integration to SQLite</li>
                    <li>Custom event bus</li>
                    <li>Various movement exploits</li>
                    <li>Data collection (player connection events)</li>
                    <li>Packet interception and modification</li>
                </ul>

                <b>Technologies</b>
                <ul className="list-disc list-inside">
                    <li>Java</li>
                    <li>Minecraft Forge</li>
                    <li>Minecraft Fabric</li>
                    <li>SQLite</li>
                    <li>Mixin</li>
                    <li>Event Bus</li>
                </ul>
            </main>
        </>
    )
}