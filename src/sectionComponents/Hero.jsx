import Tilt from 'react-parallax-tilt'

import mePic from '../assets/img/me.jpg';
import ScrollCircle from './ScrollCircle';

import {useRef, useEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero(){
    useEffect(() => {

        const hero = gsap.to("#hero-section", {
            scale: 0.9,
            scrollTrigger: {
                trigger: "#hero-section",
                start: "top top",
                end: "+=500",
                scrub: true,
                pin: false,
            },
        });

        const ctx = gsap.context(() => {

            // this's shit
            // gsap.from("#mePic", {
            //     scale: 1.5,
            //     y: "calc(50vh - 50%)",
            //     x: "calc(50vw - 50%)",
            //     duration: 1.5,
            //     ease: "power3.in",
            // });

        });

        

        return () => {
            hero.kill();
            ctx.revert();
        }
    }, []);

    return(
        <section id="hero-section" className='flex 2xl:flex-row flex-col lg:justify-between md:justify-evenly justify-center md:gap-0 gap-10 2xs:p-10 py-10 px-5 h-screen relative top-0 left-0'>
            <div className='xl:w-3/5 w-full'>
                <h1 className='font-bold lg:text-display text-heading1 tracking-tight md:leading-[var(--text-display)*1.5] leading-[var(--text-heading1)]'>Florian Pelletier</h1>
                <h2 className='lg:text-heading1 text-heading2 md:leading-0.5 leading-[var(--text-heading2)] tracking-tight'>Développeur Full&#x2011;Stack</h2>
            </div>
            <div className='flex xl:w-2/5 lg:w-4/7 md:w-4/6 xs:w-4/5 w-full gap-2.5 self-end-safe '>
                <ul className='2xs:w-1/3 w-fit flex flex-col justify-center items-end-safe font-italic'>
                    <li>Dev Web /</li>
                    <li>Dev CMS /</li>
                    <li>Design Web /</li>
                </ul>
                <div className='2xs:w-2/3 w-1/2' id='mePic'>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={800}>
                        <img src={mePic} loading='lazy' alt="" className='w-full grayscale-100 brightness-110 hover:grayscale-0 hover:brightness-100 duration-300'/>
                    </Tilt>
                </div>
                
            </div>
            <ScrollCircle></ScrollCircle>
        </section>
    );
}

export default Hero