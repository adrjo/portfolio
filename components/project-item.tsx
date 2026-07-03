import Link from "next/link";

interface Props {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    time: string;
    children?: React.ReactNode;
}

export default function ProjectItem({ title, description, technologies, link, time, children }: Props) {
    return (
        <li className="flex flex-col gap-1 my-2 p-4 border-b border-gray-300">
            <div className="flex justify-between items-center">
                <Link href={link} className="text-lg font-semibold">{title}</Link>
                <p className="text-sm">{time}</p>
            </div>
            <p>{description}</p>
            {children}
            <div className="flex flex-wrap gap-1">
                {technologies.map((tech) => (
                    <span key={tech} className="text-xs pr-2 py-1">{tech}</span>
                ))}
            </div>
        </li>
    )
}