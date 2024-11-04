'use client';

import Slider from 'react-slick';
import { ProjectCard } from './ProjectCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// todo: vercel 올라 와있는 프로젝트 전부 등록
// 현업에서 작업한거 올릴만한거 등록
// 프로젝트한거 .. 

// ns 홈쇼핑 엔라방 커뮤니티.. 페이지 - 확인가능 배포중

// RTC 기반 라이브상담 - 배포 x  (추가작업필요..)
// 아비오 지니프릭스 자체 쇼핑몰 (nhn commerce api 연동) - 배포 x  (추가작업필요..)
// 지니게임 신맞고 , 판다팡 유지보수 - 배포 x  (추가작업필요..)
const deployedProjects = [
  {
    title: "영화 앱",
    description: "리액트와 테일윈드를 사용하여 영화 정보를 제공하는 웹 앱입니다.",
    imageUrl: "/cinema.png",
    tags: ["React", "Tailwind"],
    link: "https://movie-app-psi-steel.vercel.app/"
  },
  {
    title: "finance-app",
    description: "Next.js와 hono.js를 사용하여 개발한 개인 재무 관리 웹 앱입니다.",
    imageUrl: "/finance.png",
    tags: ["Next.js", "Bun", "hono.js", "Neon-DB", "drizzle-orm"],
    link: "https://finance-tutorial-beta.vercel.app/"
  }
];

const inProgressProjects = [
  {
    title: "picknee",
    description: "Next.js와 zustand를 사용하여 개발한 일본 여행 커뮤니티 웹 입니다.",
    imageUrl: "/finance.png",
    tags: ["Next.js", "Tailwind", "zustand", "TypeScript"],
    link: "https://finance-tutorial-beta.vercel.app/"
  },
  {
    title: "picknee",
    description: "Next.js와 zustand를 사용하여 개발한 일본 여행 커뮤니티 웹 입니다.",
    imageUrl: "/finance.png",
    tags: ["Next.js", "Tailwind", "zustand", "TypeScript"],
    link: "https://finance-tutorial-beta.vercel.app/"
  },
  {
    title: "picknee",
    description: "Next.js와 zustand를 사용하여 개발한 일본 여행 커뮤니티 웹 입니다.",
    imageUrl: "/finance.png",
    tags: ["Next.js", "Tailwind", "zustand", "TypeScript"],
    link: "https://finance-tutorial-beta.vercel.app/"
  }
  // ... 다른 진행중인 프로젝트들 ...
];


//어차피 경험 프로젝트니깐 .. 배포 한거 안볼꺼 아님 
// 그냥 이런거 했다 사진이랑 설명만 올리면 될 뜻

const experiencedProjects = [
  {
    title: "RTC 기반 라이브상담",
    description: "WebRTC 기술을 활용한 실시간 상담 서비스",
    imageUrl: "/rtc-consulting.png",
    tags: ["WebRTC", "Vue", "Node.js"],
    link: "#"
  },

  {
    title: "지니프릭스 쇼핑몰",
    description: "NHN Commerce API를 활용한 자체 쇼핑몰",
    imageUrl: "/shop.png",
    tags: ["Vue.js", "NHN Commerce API"],
    link: "#"
  },

  {
    title: "NS홈쇼핑 엔라방 커뮤니티",
    description: "NS홈쇼핑의 라이브 커머스 커뮤니티 페이지 개발",
    imageUrl: "/ns-shopping.png",
    tags: ["Vue.js"],
    link: "#"
  },

  {
    title: "지니게임 신맞고/판다팡",
    description: "모바일 게임 플랫폼 유지보수 및 기능 개선",
    imageUrl: "/genie-games.png",
    tags: ["React", "Node.js", "WebSocket"],
    link: "#"
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
    <div className="max-w-6xl mx-auto space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">배포된 프로젝트</h2>
        <Slider {...settings} className="deployed-projects">
          {deployedProjects.map((project, index) => (
            <div key={index} className="px-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">진행중인 프로젝트</h2>
        <Slider {...settings} className="in-progress-projects">
          {inProgressProjects.map((project, index) => (
            <div key={index} className="px-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">경험 프로젝트</h2>
        <Slider {...settings} className="experienced-projects">
          {experiencedProjects.map((project, index) => (
            <div key={index} className="px-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}