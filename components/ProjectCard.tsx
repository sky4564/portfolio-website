import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export function ProjectCard({ title, description, imageUrl, tags, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-800 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm hover:scale-110 transition-transform duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-blue-700 hover:text-blue-900 font-medium hover:translate-x-2 transition-transform duration-200">
            <span className="inline-flex items-center group">
              <span className="ml-1 group-hover:translate-x-2 transition-transform duration-300">자세히 보기 →</span>
            </span>
          </span>
        </div>
      </div>
    </a>
  );
} 