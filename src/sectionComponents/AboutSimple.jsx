import {useRef, useEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutSimple() {
    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null);
    

    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }

    useEffect(() => {
        const trigger = triggerRef.current;

        const reveal = gsap.to(lettersRef.current, {
            color: 'hsl(0, 0, 100%)',
            stagger: 0.005,
            scrollTrigger: {
                trigger: trigger,
                start: "top 80%",
                end: "top top",
                toggleActions: "restart reverse restart reverse",
            },
        });

        setTimeout(()=>{
            ScrollTrigger.refresh();
        },100);

        return () => {
            if (reveal.scrollTrigger) reveal.scrollTrigger.kill();
            reveal.kill();
        };
    }, []);

    const text = "Je suis un étudiant en développement web full-stack, passionné et toujours là pour en apprendre plus.";

    return(
        <section id="about-simple-section" className='flex flex-col 2xs:p-10 py-10 px-5 xl:text-display sm:text-heading1 2xs:text-heading2 text-heading3 bg-black justify-center items-center z-10 min-h-screen color-section'>
            <p className=" leading-[1em] font-bold text-balance text-black tracking-tight" ref={triggerRef}>{text.split("").map((letter, index) => {
                return <span className="reveal-text" ref={setlettersRef} key={index}>{letter}</span>
            })}</p>
        </section>
    );
}

export default AboutSimple