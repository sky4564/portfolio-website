import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export function ProjectCard({ title, description, imageUrl, tags, link }: ProjectCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="project-card cursor-pointer" style={{ width: '100%', height: '350px', overflow: 'hidden' }}>
        <img src={imageUrl} alt={title} className="w-full h-2/3 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
          <div className="mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
} 