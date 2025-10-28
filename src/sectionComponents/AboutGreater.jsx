import Tilt from 'react-parallax-tilt'

import mePic from '../assets/img/me.jpg';
import arrow from '../assets/svg/arrow-up-right.svg';

import {useRef, useEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutGreater() {
    useEffect(() => {

        const aboutGreater = gsap.to("#about", {
            backgroundColor: "#ffffff",
            scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                end: "top 50%",
                scrub: true,
                pin: false,
            },
            
        });

        return () => {
            aboutGreater.kill();
        }

    }, []);

    return (
        <section id="about" className='flex xl:flex-row flex-col 2xs:p-10 py-10 px-5 relative top-0 left-0 bg-black gap-10 justify-between items-center'>

            <img src={mePic} loading='lazy' alt="moi" className='xl:w-3/7 md:w-4/7 xs:w-5/7 2xs:w-6/7 w-full object-cover'/>
            <div className='flex flex-col gap-5 xl:w-1/2 md:w-4/7 xs:w-5/7 2xs:w-6/7 w-full sticky top-21 h-fit xl:self-start'>
                <h2 className='leading-[1em] font-bold text-balance text-black xl:text-display md:text-heading1 text-heading2 mb-5'>Et quoi de plus sur moi?</h2>
                <p className='text-balance'>Je suis un étudiant en deuxième année de BUT MMI (Multimédia et Métiers de l'Informatique). Pour la faire simple, je suis polyvalent&nbsp;: je code des sites web statiques comme dynamiques&nbsp;💻, je crée sur Adobe et ses variantes, et je travaille également sur la communication&nbsp;📢.</p>
                <p className='text-balance'>J'ai pour volonté de devenir à la fin de mon cursus développeur full-stack, et prêt à tout pour le devenir&nbsp;💪! En attendant, je reste un mordu de jeux-vidéos et un adepte de la création de mondes fantasy.</p>
                <p className='text-balance'>Psst&nbsp;! Je recherche par ailleurs un stage pour le deuxième semestre de 2026 si possible dans le développement web&nbsp;😉!</p>
                {/* arrow from bootstrap icons */}
                <a href="portfolio/public/CV_Florian_Pelletier.pdf" className='flex group link w-fit' target='_blank'>Mon CV <img src={arrow} alt="" className='group-hover:-translate-y-1 duration-300'/></a> 
            </div>

        </section>
    );
}

export default AboutGreater
