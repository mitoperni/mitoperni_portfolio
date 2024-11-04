import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";

export default function useScrollAnimationFromRight() {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animación para entrar desde la derecha al centro
            controls.start({ opacity: 1, x: 100 });
          } else {
            // Posición inicial fuera de la vista, desplazado a la derecha
            controls.start({ opacity: 0, x: 300 });
          }
        });
      },
      { threshold: 0.3 } // Ajusta el umbral según lo necesario
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return { ref, controls };
}
