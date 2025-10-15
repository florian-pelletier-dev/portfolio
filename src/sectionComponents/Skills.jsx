import html from '../assets/svg/logos/html5.svg';
import css from '../assets/svg/logos/css3.svg';
import js from '../assets/svg/logos/js.svg';
import php from '../assets/svg/logos/php.svg';
import sql from '../assets/svg/logos/sql.svg';
import bootstrap from '../assets/svg/logos/bootstrap.svg';
import photoshop from '../assets/svg/logos/photoshop.svg';
import illustrator from '../assets/svg/logos/illustrator.svg';
import premiere from '../assets/svg/logos/premiere.svg';
import react from '../assets/svg/logos/react.svg';
import gsap from '../assets/svg/logos/gsap.svg';

function Competences() {
    return (

        <section id="skills" className='flex lg:flex-row flex-col xl:gap-50 lg:gap-25 gap-10 2xs:p-10 py-10 px-5 text-display bg-black justify-center items-center z-10 min-h-screen'>
            <h2 className="leading-[1em] font-bold text-balance text-white 3xs:text-display text-heading1 lg:sticky lg:top-1/2 lg:text-left text-center self-start lg:w-1/2 w-full">Skills</h2>
            <div className="flex flex-col gap-10 w-full items-start justify-center *:w-full divide-y-2 *:border-white *:pb-10">
                <article className="flex xs:flex-row flex-col xs:items-baseline items-center xs:gap-0 gap-5">
                    <h3 className="leading-[1em] xs:w-fit w-full xs:text-left text-center font-bold text-balance text-white text-heading3 justify-self-center">Web</h3>
                    <ul className="leading-[1em] text-balance xs:w-full w-fit text-white sm:text-heading2 text-heading3 justify-self-center xs:text-right text-left *:flex *:xs:justify-self-end-safe *:gap-5 *:xs:flex-row *:flex-row-reverse *:w-fit self-start">
                        <li>html <img src={html} alt="" className='sm:w-[var(--text-heading2)] w-[var(--text-heading3)] svg-white' /></li>
                        <li>css <img src={css} alt="" className='sm:w-[var(--text-heading2)] w-[var(--text-heading3)] svg-white' /></li>
                        <li>js <img src={js} alt="" className='sm:w-[var(--text-heading2)] w-[var(--text-heading3)] svg-white' /></li>
                        <li>php <img src={php} alt="" className='sm:w-[var(--text-heading2)] w-[var(--text-heading3)] svg-white' /></li>
                        <li>sql <img src={sql} alt="" className='sm:w-[var(--text-heading2)] w-[var(--text-heading3)] svg-white' /></li>
                        <li>bootstrap <img src={bootstrap} alt="" className='sm:w-[var(--text-heading2)] w-[var(--text-heading3)] svg-white' /></li>
                    </ul>
                </article>
                <article className="flex xs:flex-row flex-col xs:items-baseline items-center xs:gap-0 gap-5">
                    <h3 className="leading-[1em] xs:w-fit w-full xs:text-left text-center font-bold text-balance text-white text-heading3 justify-self-center">Création</h3>
                    <ul className="leading-[1em] text-balance xs:w-full w-fit text-white sm:text-heading2 text-heading3 justify-self-center xs:text-right text-left *:flex *:xs:justify-self-end-safe *:gap-5 *:xs:flex-row *:flex-row-reverse *:w-fit self-start">
                        <li>photoshop <img src={photoshop} alt="" className='sm:w-[var(--text-heading2)] w-[var(--text-heading3)] svg-white' /></li>
                        <li>illustrator <img src={illustrator} alt="" className='sm:w-[var(--text-heading2)] w-[var(--text-heading3)] svg-white' /></li>
                        <li>premiere pro <img src={premiere} alt="" className='sm:w-[var(--text-heading2)] w-[var(--text-heading3)] svg-white' /></li>
                    </ul>
                </article>
                <article className="flex xs:flex-row flex-col xs:items-baseline items-center xs:gap-0 gap-5">
                    <h3 className="leading-[1em] xs:w-fit w-full xs:text-left text-center font-bold text-balance text-white text-heading3 justify-self-center">J'apprends</h3>
                    <ul className="leading-[1em] text-balance xs:w-full w-fit text-white sm:text-heading2 text-heading3 justify-self-center xs:text-right text-left *:flex *:xs:justify-self-end-safe *:gap-5 *:xs:flex-row *:flex-row-reverse *:w-fit self-start">
                        <li>react <img src={react} alt="" className='sm:w-[var(--text-heading2)] w-[var(--text-heading3)] svg-white' /></li>
                        <li>tailwind <img src={css} alt="" className='sm:w-[var(--text-heading2)] w-[var(--text-heading3)] svg-white' /></li>
                        <li>gsap <img src={gsap} alt="" className='sm:w-[var(--text-heading2)] w-[var(--text-heading3)] svg-white' /></li>
                    </ul>
                </article>
            </div>
        </section>

    );
}

export default Competences