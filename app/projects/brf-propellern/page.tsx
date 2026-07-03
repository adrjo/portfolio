import Link from "next/link";
import Image from "next/image";

export default function BRFPropellern() {
    return (
        <>
            <Link href="/projects">← Back</Link>
            <main className="flex flex-col gap-2 w-full max-w-2xl mx-auto py-10">
                <h1 className="text-3xl font-semibold text-center">BRF Propellern</h1>
                <Link target="_blank" href="https://brfpropellern.com"><b>Live site</b></Link>

                <p>In 2018/2019 I developed a new website for the housing association (bostadsrättsförening) BRF Propellern, as part of my final project at <Link target="_blank" href="https://alleskolan.eu">Alléskolan</Link>. This was my first bigger project where planning and dialogue with the client was a big part of the process. The website is still in use today.</p>
                <p>The website works as a simple parallax one-page website as logged out, with more internal documents and information available to logged in users. One of the main goals of the project was making the website easily editable, even for administrators with limited technical knowledge. This was made possible via the WordPress admin panel and use of the Advanced Custom Fields (ACF) WordPress plugin in combination with a custom WordPress theme.</p>

                <b>Technologies</b>
                <ul className="list-disc list-inside">
                    <li>WordPress</li>
                    <li>PHP</li>
                    <li>ACF</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Project Management</li>
                </ul>
                <b>Gallery</b>
                <Link href="/brf-propellern/logged-out.png">
                    <Image src="/brf-propellern/logged-out.png" alt="BRF Propellern Start Page" width={800} height={400} className="mx-auto my-4" />
                </Link>
                <Link href="/brf-propellern/logged-in.png">
                    <Image src="/brf-propellern/logged-in.png" alt="BRF Propellern Start Page as logged in user" width={800} height={400} className="mx-auto my-4" />
                </Link>
                <Link href="/brf-propellern/advanced-custom-fields.png">
                    <Image src="/brf-propellern/advanced-custom-fields.png" alt="BRF Propellern admin page with ACF" width={800} height={400} className="mx-auto my-4" />
                </Link>
            </main>
        </>
    )
}