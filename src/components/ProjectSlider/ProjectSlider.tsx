"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "@components/ProjectCard/ProjectCard";
import s1 from "@assets/projects/1.jpeg";
import s2 from "@assets/projects/2.jpeg";
import s3 from "@assets/projects/3.jpeg";
import s4 from "@assets/projects/4.jpeg";
import s5 from "@assets/projects/5.jpeg";
import s6 from "@assets/projects/6.jpeg";
import s7 from "@assets/projects/7.jpeg";
import s8 from "@assets/projects/8.jpeg";
import s9 from "@assets/projects/9.jpeg";
import s10 from "@assets/projects/10.jpeg";
import s11 from "@assets/projects/11.jpeg";
import s12 from "@assets/projects/12.jpeg";
import s13 from "@assets/projects/13.jpeg";
import s14 from "@assets/projects/14.jpeg";
import s15 from "@assets/projects/15.jpeg";
import s16 from "@assets/projects/16.jpeg";

const ProjectSlider: React.FC = () => {
  const projects = [
    {
      id: "12",
      title: "Reptilario y Ajolotario Quetzal",
      description: "Axolotl Refugee Site",
      backgroundImage: s12.src,
      href: "https://reptilarioyajolotarioquetzal.com/",
    },
    {
      id: "14",
      title: "Greek",
      description: "DJ Site",
      backgroundImage: s14.src,
      href: "https://djgreek.mx",
    },
    {
      id: "15",
      title: "Neural Factory",
      description: "Big Data Company Site",
      backgroundImage: s15.src,
      href: "https://neural-factory.com/",
    },
    {
      id: "13",
      title: "Xianna",
      description: "Fashion Blog",
      backgroundImage: s13.src,
      href: "https://xianna.com.mx/",
    },
    {
      id: "5",
      title: "Orza Tech",
      description: "Startup Site",
      backgroundImage: s5.src,
      href: "https://orzatech.com",
    },
    {
      id: "6",
      title: "Psique & Ser",
      description: "Business Site",
      backgroundImage: s6.src,
      href: "https://psiqueyser.org",
    },
    {
      id: "1",
      title: "Contadores Martínez Carreño y Asociados",
      description: "Single Page",
      backgroundImage: s1.src,
      href: "https://cmcya.mx",
    },
    {
      id: "2",
      title: "Fratelli's Helados",
      description: "Landing Page",
      backgroundImage: s2.src,
      href: "https://fratellishelados.com",
    },
    {
      id: "3",
      title: "Hilitos Lili",
      description: "Business Site",
      backgroundImage: s3.src,
      href: "https://hilitoslili.com",
    },
    {
      id: "4",
      title: "MG Servicio Inmobiliario",
      description: "Single Page",
      backgroundImage: s4.src,
      href: "https://mgsi.mx",
    },
    {
      id: "7",
      title: "Rondo Productions",
      description: "Portfolio & Services Site",
      backgroundImage: s7.src,
      href: "https://rondoproductions.com/",
    },
    {
      id: "8",
      title: "Salomon Photo",
      description: "Photographer Site",
      backgroundImage: s8.src,
      href: "https://salomon-mtz.github.io/sp.github.io/",
    },
    {
      id: "16",
      title: "Faro Sur",
      description: "Clothing Manufacturer Site",
      backgroundImage: s16.src,
      href: "https://farosur.netlify.app/",
    },
    {
      id: "9",
      title: "Colegio Antonio José de Sucre",
      description: "Education Site",
      backgroundImage: s9.src,
      href: "https://colegiosucre.netlify.app/",
    },
    {
      id: "10",
      title: "Asesorista",
      description: "Real Estate Site",
      backgroundImage: s10.src,
      href: "https://asesorista.com.mx",
    },
    {
      id: "11",
      title: "Skin Secrets",
      description: "Spa & Skin Care Site",
      backgroundImage: s11.src,
      href: "https://skinsecrets.mx",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      grabCursor={true} // Enables grab cursor for a touch-like experience
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      style={{ padding: "20px 0" }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <ProjectCard
            title={project.title}
            description={project.description}
            backgroundImage={project.backgroundImage}
            href={project.href}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;
