import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { volumeMuteOutline, volumeHighOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, github } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audio, setAudio] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleAudio = () => {
    setAudio(!audio);
    if (audio) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };


  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
          <p className='text-black-100 text-[18px] font-bold cursor-pointer flex flex-col items-center'>
            <p>VAMO ARRI<span className={`text-transparent bg-top bg-clip-text bg-contain
          bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoZ__8T0wM9gK9_SN1kDdEILMmozmvyxMTJ8EqKW3&s')]`}
          >CBA</span></p>
            <span className='sm:block hidden text-[8px]'>EVT 13672</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-black-100"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            key="audio"
          >
            <audio ref={audioRef} src="/cordobeces.mp3" loop />
            <div
              className={`text-3xl cursor-pointer ${audio ? "text-black-100" : "text-black-100"} transition-colors`}
              onClick={() => handleToggleAudio()}
            >
              <IonIcon
                icon={audio ? volumeHighOutline : volumeMuteOutline} // Asigna el ícono específico que deseas mostrar
              />
            </div>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


