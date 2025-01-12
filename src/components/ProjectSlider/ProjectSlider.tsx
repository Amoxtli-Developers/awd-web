"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "@components/ProjectCard/ProjectCard";
import { supabase } from "@utils/supabaseClient";
import { useTranslation } from "react-i18next";

interface Project {
  id: string;
  title: string;
  description: string;
  backgroundImage: string; // URL to the image
  href: string;
}

const ProjectSlider: React.FC = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = [
        {
          id: "12",
          title: t("projects.reptilario.title"),
          description: t("projects.reptilario.description"),
          imagePath: "projects/12.jpeg",
          href: "https://reptilarioyajolotarioquetzal.com/",
        },
        {
          id: "14",
          title: t("projects.greek.title"),
          description: t("projects.greek.description"),
          imagePath: "projects/14.jpeg",
          href: "https://djgreek.mx",
        },
        {
          id: "15",
          title: t("projects.neuralFactory.title"),
          description: t("projects.neuralFactory.description"),
          imagePath: "projects/15.jpeg",
          href: "https://neural-factory.com/",
        },
        {
          id: "13",
          title: t("projects.xianna.title"),
          description: t("projects.xianna.description"),
          imagePath: "projects/13.jpeg",
          href: "https://xianna.com.mx/",
        },
        {
          id: "5",
          title: t("projects.orzaTech.title"),
          description: t("projects.orzaTech.description"),
          imagePath: "projects/5.jpeg",
          href: "https://orzatech.com",
        },
        {
          id: "6",
          title: t("projects.psiqueSer.title"),
          description: t("projects.psiqueSer.description"),
          imagePath: "projects/6.jpeg",
          href: "https://psiqueyser.org",
        },
        {
          id: "1",
          title: t("projects.cmc.title"),
          description: t("projects.cmc.description"),
          imagePath: "projects/1.jpeg",
          href: "https://cmcya.mx",
        },
        {
          id: "2",
          title: t("projects.fratellis.title"),
          description: t("projects.fratellis.description"),
          imagePath: "projects/2.jpeg",
          href: "https://fratellishelados.com",
        },
        {
          id: "3",
          title: t("projects.hilitosLili.title"),
          description: t("projects.hilitosLili.description"),
          imagePath: "projects/3.jpeg",
          href: "https://hilitoslili.com",
        },
        {
          id: "4",
          title: t("projects.mgsi.title"),
          description: t("projects.mgsi.description"),
          imagePath: "projects/4.jpeg",
          href: "https://mgsi.mx",
        },
        {
          id: "7",
          title: t("projects.rondoProductions.title"),
          description: t("projects.rondoProductions.description"),
          imagePath: "projects/7.jpeg",
          href: "https://rondoproductions.com/",
        },
        {
          id: "8",
          title: t("projects.salomonPhoto.title"),
          description: t("projects.salomonPhoto.description"),
          imagePath: "projects/8.jpeg",
          href: "https://salomon-mtz.github.io/sp.github.io/",
        },
        {
          id: "16",
          title: t("projects.faroSur.title"),
          description: t("projects.faroSur.description"),
          imagePath: "projects/16.jpeg",
          href: "https://farosur.netlify.app/",
        },
        {
          id: "9",
          title: t("projects.colegioSucre.title"),
          description: t("projects.colegioSucre.description"),
          imagePath: "projects/9.jpeg",
          href: "https://colegiosucre.netlify.app/",
        },
        {
          id: "10",
          title: t("projects.asesorista.title"),
          description: t("projects.asesorista.description"),
          imagePath: "projects/10.jpeg",
          href: "https://asesorista.com.mx",
        },
        {
          id: "11",
          title: t("projects.skinSecrets.title"),
          description: t("projects.skinSecrets.description"),
          imagePath: "projects/11.jpeg",
          href: "https://skinsecrets.mx",
        },
      ];

      const updatedProjects = await Promise.all(
        projectData.map(async (project) => {
          const { data } = supabase.storage
            .from("AWD images") // Your bucket name
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
  }, [t]);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      grabCursor={true}
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
