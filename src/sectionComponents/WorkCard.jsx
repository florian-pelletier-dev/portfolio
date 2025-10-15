import Badge from './Badge.jsx';

import { Link } from 'react-router-dom';

import {useRef, useEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WorkCard({title,desc,img,link,badges}) {

    const cardRef = useRef(null)

    useEffect(() => {

        gsap.fromTo(
            cardRef.current,
            {scale: 0.5}, 
            {
                scale: 1,
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top bottom",
                    end: "middle middle",
                    toggleActions: "restart none none reverse",
                },
            }
        );

        const img = cardRef.current.querySelector('img');
        if (img && !img.complete) {
            img.onload = () => ScrollTrigger.refresh();
        } else {
            ScrollTrigger.refresh();
        }
    }, []);

    return (
        <article className="work-card flex flex-col items-center justify-center">
            <Link to={link} className='flex flex-col items-center justify-center lg:w-2/3 md:w-4/5 w-full' ref={cardRef}>
                <div className='h-fit rounded-xl overflow-hidden relative w-full'>
                    <img src={img} loading='lazy' alt="projet" className="w-full"/>
                    <div className='flex sm:gap-5 xs:gap-2 gap-1 absolute 2xs:bottom-5 2xs:left-5 bottom-2 left-1'>
                        {badges.map((badge, index) => (
                            <Badge key={index} text={badge}/>
                        ))}
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-5 gap-0 2xs:p-5 lg:py-5 py-0 p-0 w-full">
                    <h3 className="text-gray text-heading3 text-nowrap text-center">{title}</h3>
                    <p className="text-white text-[1rem] lg:text-left text-center">{desc}</p>
                </div>
            </Link>
        </article>
    );

};

export default WorkCard