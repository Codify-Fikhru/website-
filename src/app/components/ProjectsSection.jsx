"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 7,
    title: "Puskesmas Lampia Website",
    description: "Puskesmas Lampia adalah fasilitas kesehatan masyarakat yang menyediakan layanan medis dasar dan pencegahan penyakit untuk penduduk di sekitar Lampia.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://uptdpuskesmaslampia.id/",
  },
  {
    id: 8,
    title: "Team Bento Website",
    description: "Team Bento adalah tim ahli dalam jasa joki tugas pemrograman, siap membantu dalam menyelesaikan berbagai proyek pemrograman dengan cepat dan efisien.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://team-bento.vercel.app/",
  },
  {
    id: 9,
    title: "Kopi Hening Website ",
    description: "Kopi Hening adalah tempat yang tenang dan nyaman untuk menikmati berbagai varian kopi berkualitas, disajikan dengan penuh keahlian dan perhatian pada detail.",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://kopihening-web.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        
        <ProjectTag
          onClick={handleTagChange}
          name="Website"
          isSelected={tag === "Website"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
