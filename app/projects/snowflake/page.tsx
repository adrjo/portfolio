import Link from "next/link";
import Image from "next/image";


export default function Snowflake() {
    return (
        <>
            <Link href="/projects">← Back</Link>
            <main className="flex flex-col gap-2 w-full max-w-2xl mx-auto py-10">
                <h1 className="text-3xl font-semibold text-center">Snowflake</h1>
                <Link href="https://github.com/thelampgod/Snowflake"><b>GitHub</b></Link>

                <p>Snowflake is an end-to-end encrypted client/server communication platform for Minecraft that enables secure group chat and live coordinate sharing between players. It operates independently of the Minecraft server, allowing users to communicate privately even on heavily moderated or restricted servers.</p>

                <p>The system consists of two Java applications: a central server and a client implemented as both Forge (legacy) and Fabric mods. The server acts solely as an orchestrator, routing messages between clients without access to their plaintext contents.</p>
                <p>Communication is implemented using Java sockets and a custom binary packet protocol. Clients encrypt messages using the recipient's public key before transmission, and the server simply forwards the encrypted payload to its destination. As a result, only the intended recipient can decrypt and read the message.</p>
                <p>Snowflake also supports encrypted group chats. When a group is created, the owner generates a shared group key and securely distributes it to invited members by encrypting it with each member's public key. Once distributed, all group messages are encrypted using the shared group key, allowing only authorized members to read the conversation.</p>

                <b>Live coordinate sharing</b>
                <p>Snowflake enables live coordinate sharing, which makes it possible to see the location of friends outside the regular Minecraft player render-distance. This makes for a cool experience where players thousands or even millions of blocks away can be rendered in-game as a marker.</p>

                <b>Technologies</b>
                <ul className="list-disc list-inside">
                    <li>Java</li>
                    <li>Sockets</li>
                    <li>SQLite</li>
                    <li>End-to-end encryption using public-key cryptography</li>
                </ul>

                <b>Gallery</b>
                <Link href="/snowflake/client-gui.webp">
                    <Image src="/snowflake/client-gui.webp" alt="Client GUI" width={800} height={400} className="mx-auto my-4" />
                </Link>
                <video controls muted preload="metadata" className="mx-auto my-4">
                    <source
                        src="/snowflake/coordinate-share.mp4"
                        type="video/mp4"
                    />
                </video>
                <video controls muted preload="metadata" className="mx-auto my-4">
                    <source
                        src="/snowflake/group-messaging.mp4"
                        type="video/mp4"
                    />
                </video>

            </main>
        </>
    )
}