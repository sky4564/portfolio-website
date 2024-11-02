'use client';

import Slider from 'react-slick';
import { ProjectCard } from './ProjectCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: "영화 앱",
    description: "리액트와 테일윈드를 사용하여 영화 정보를 제공하는 웹 앱입니다.",
    imageUrl: "/cinema.png",
    tags: ["React", "Tailwind"],
    link: "https://movie-app-psi-steel.vercel.app/"
  },
  {
    title: "프로젝트 2",
    description: "프로젝트 2에 대한 설명입니다.",
    imageUrl: "/me.webp",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "https://project2.com"
  },
  {
    title: "프로젝트 3",
    description: "프로젝트 3에 대한 설명입니다.",
    imageUrl: "/me.webp", tags: ["React", "Firebase", "Tailwind"],
    link: "https://project3.com"
  },
  {
    title: "프로젝트 3",
    description: "프로젝트 3에 대한 설명입니다.",
    imageUrl: "/me.webp", tags: ["React", "Firebase", "Tailwind"],
    link: "https://project3.com"
  },
  {
    title: "프로젝트 3",
    description: "프로젝트 3에 대한 설명입니다.",
    imageUrl: "/me.webp", tags: ["React", "Firebase", "Tailwind"],
    link: "https://project3.com"
  },
  {
    title: "프로젝트 3",
    description: "프로젝트 3에 대한 설명입니다.",
    imageUrl: "/me.webp", tags: ["React", "Firebase", "Tailwind"],
    link: "https://project3.com"
  }
];

export function ProjectSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </Slider>
    </div>
  );
}