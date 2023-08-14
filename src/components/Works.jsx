import React, { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { logoInstagram } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const ProjectCard = ({
  index,
  name,
  description,
  price,
  video,
  source_code_link,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <video
            ref={videoRef}
            src={video}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
            autoPlay
            loop
            muted
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-black-100 text-white-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <IonIcon
                icon={logoInstagram} // Asigna el ícono específico que deseas mostrar
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <div className="flex w-full justify-between items-center text-[24px]">
            <h3 className='text-black-100 font-bold bg-primary rounded-lg p-3 text-[24px]'>{name}</h3>
            <h2 className="bg-primary rounded-lg p-3 text-black-100 font-bold">{price}U$D</h2>
          </div>
          <p className='mt-4 text-secondary text-[14px]'>{description}</p>
          <button class="flex items-center font-bold mt-4 text-black-100 bg-primary border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Reservar
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">Todos los productos y servicios estan sujetos a disponibilidad.</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="mt-1" id="actividades">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Que hacemos?</p>
        <h2 className={`${styles.sectionHeadText}`}>Conocé cba por 80 U$D</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-black-100 text-[17px] max-w-3xl leading-[30px]'
        >
          Fernet, cuarteto y alegría de exportación. En Vamo Arricba organizamos tu visita a la republica de Córdoba.
          Fiestas, bailes, trecking, paisajes, gastronomía, compras y un montón más. Todo un precio barataso.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {projects.map((project, index) => (
            <SwiperSlide>
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");