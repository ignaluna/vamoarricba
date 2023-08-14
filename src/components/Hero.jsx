import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center justify-center gap-5`}
      >
        <div className="w-screen flex flex-col justify-center items-center">
          <h1 className={`${styles.heroHeadText}`}>
            VAMO ARRI<span className={`text-transparent bg-top bg-clip-text text-shadow-lg
          bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoZ__8T0wM9gK9_SN1kDdEILMmozmvyxMTJ8EqKW3&s')]`}>CBA</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100 text-shadow-lg`}>
           Experiencia inmersiva cordobesa, conocé la cultura del culiadaso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;