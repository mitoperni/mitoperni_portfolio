import { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';

export default function useScrollAnimation() {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              y: 0,
              filter: "blur(0px)", // Elimina el desenfoque al entrar
              transition: {
                type: "spring",
                stiffness: 70,
                damping: 20,
                duration: 0.1,
                delay: 0.2, // Retraso sutil al aparecer
                ease: [0.42, 0, 0.58, 1], // Easing personalizado suave
              },
            });
          } else {
            controls.start({
              opacity: 0,
              y: 100, // Desplaza hacia abajo al salir
              filter: "blur(8px)", // Desenfoque gradual al desaparecer
              transition: {
                duration: 0.1,
                ease: [0.55, 0.085, 0.68, 0.53], // Easing rápido y natural
              },
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [controls]);

  return { ref, controls };
}
