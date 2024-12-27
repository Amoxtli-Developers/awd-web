"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "@components/ProjectCard/ProjectCard";
import { supabase } from "@utils/supabaseClient";

interface Project {
  id: string;
  title: string;
  description: string;
  backgroundImage: string; // URL to the image
  href: string;
}

const ProjectSlider: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = [
        {
          id: "12",
          title: "Reptilario y Ajolotario Quetzal",
          description: "Axolotl Refugee Site",
          imagePath: "projects/12.jpeg",
          href: "https://reptilarioyajolotarioquetzal.com/",
        },
        {
          id: "14",
          title: "Greek",
          description: "DJ Site",
          imagePath: "projects/14.jpeg",
          href: "https://djgreek.mx",
        },
        {
          id: "15",
          title: "Neural Factory",
          description: "Big Data Company Site",
          imagePath: "projects/15.jpeg",
          href: "https://neural-factory.com/",
        },
        {
          id: "13",
          title: "Xianna",
          description: "Fashion Blog",
          imagePath: "projects/13.jpeg",
          href: "https://xianna.com.mx/",
        },
        {
          id: "5",
          title: "Orza Tech",
          description: "Startup Site",
          imagePath: "projects/5.jpeg",
          href: "https://orzatech.com",
        },
        {
          id: "6",
          title: "Psique & Ser",
          description: "Business Site",
          imagePath: "projects/6.jpeg",
          href: "https://psiqueyser.org",
        },
        {
          id: "1",
          title: "Contadores Martínez Carreño y Asociados",
          description: "Single Page",
          imagePath: "projects/1.jpeg",
          href: "https://cmcya.mx",
        },
        {
          id: "2",
          title: "Fratelli's Helados",
          description: "Landing Page",
          imagePath: "projects/2.jpeg",
          href: "https://fratellishelados.com",
        },
        {
          id: "3",
          title: "Hilitos Lili",
          description: "Business Site",
          imagePath: "projects/3.jpeg",
          href: "https://hilitoslili.com",
        },
        {
          id: "4",
          title: "MG Servicio Inmobiliario",
          description: "Single Page",
          imagePath: "projects/4.jpeg",
          href: "https://mgsi.mx",
        },
        {
          id: "7",
          title: "Rondo Productions",
          description: "Portfolio & Services Site",
          imagePath: "projects/7.jpeg",
          href: "https://rondoproductions.com/",
        },
        {
          id: "8",
          title: "Salomon Photo",
          description: "Photographer Site",
          imagePath: "projects/8.jpeg",
          href: "https://salomon-mtz.github.io/sp.github.io/",
        },
        {
          id: "16",
          title: "Faro Sur",
          description: "Clothing Manufacturer Site",
          imagePath: "projects/16.jpeg",
          href: "https://farosur.netlify.app/",
        },
        {
          id: "9",
          title: "Colegio Antonio José de Sucre",
          description: "Education Site",
          imagePath: "projects/9.jpeg",
          href: "https://colegiosucre.netlify.app/",
        },
        {
          id: "10",
          title: "Asesorista",
          description: "Real Estate Site",
          imagePath: "projects/10.jpeg",
          href: "https://asesorista.com.mx",
        },
        {
          id: "11",
          title: "Skin Secrets",
          description: "Spa & Skin Care Site",
          imagePath: "projects/11.jpeg",
          href: "https://skinsecrets.mx",
        },
      ];

      const updatedProjects = await Promise.all(
        projectData.map(async (project) => {
          const { data } = supabase.storage
            .from("AWD images") // Reemplaza con el nombre de tu bucket
            .getPublicUrl(project.imagePath);

          if (!data) {
            console.error(`Error fetching image for project ${project.id}`);
            return { ...project, backgroundImage: "" };
          }

          return { ...project, backgroundImage: data.publicUrl };
        })
      );

      setProjects(updatedProjects);
    };

    fetchProjects();
  }, []);

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
