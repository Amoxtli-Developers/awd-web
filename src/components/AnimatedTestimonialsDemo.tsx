import { AnimatedTestimonials } from "@components/animated-testimonials";
import avatar1 from "@assets/testimonials/orza.jpg";
import avatar2 from "@assets/testimonials/fratellis.jpg";
import avatar3 from "@assets/testimonials/rondo.jpg";
import avatar4 from "@assets/testimonials/sucre.jpg";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Our business website is now faster, more responsive, and beautifully designed. The team perfectly captured our vision and delivered a seamless user experience.",
      name: "Andrés I.",
      designation: "CEO at Orza Tech",
      src: avatar1.src,
    },
    {
      quote:
        "The e-commerce platform built for us has taken our sales to the next level. The intuitive design and performance improvements exceeded all expectations.",
      name: "Laura O.",
      designation: "Owner at Fratelli's Helados",
      src: avatar2.src,
    },
    {
      quote:
        "The portfolio site created for us is stunning and functional. It perfectly showcases our work and has helped us gain more clients. Truly outstanding work!",
      name: "Omar D.",
      designation: "Creative Director at Rondo Productions",
      src: avatar3.src,
    },
    {
      quote:
        "Our educational site is now a hub for interactive learning and easy access for parents. The team's attention to detail and creativity made all the difference.",
      name: "Patricia A.",
      designation: "Principal at Colegio Antonio José de Sucre",
      src: avatar4.src,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
