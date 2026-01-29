import WorkNav from "../sectionComponents/WorkNav";
import WorkTopNav from "../sectionComponents/WorkTopNav";
import Footer from "../sectionComponents/Footer";

import exit from "../assets/img/exit.png";

import { Link, NavLink, Outlet } from "react-router-dom";

function Exit() {
    const nextProject = "/ticketer"
    
    return (
        <>
            <WorkTopNav
                nextProject={nextProject}
            />
            <WorkNav
                links={["Haut","Contexte","Mise en Place","Bilan"]}
                tag={["#home","#contexte","#mise-en-place","#bilan"]}
            />
            <section className="lg:px-50 md:px-25 sm:px-10 px-0 py-10 md:pt-10 pt-32 flex flex-col items-start justify-center" id="home">
                <h1 className="2xl:text-display md:text-heading1 text-heading2 text-black font-bold tracking-tight self-start md:text-left text-center w-full leading-10 xs:leading-normal pb-5 xs:pb-0">exit</h1>
                <iframe 
                    src="https://www.youtube.com/embed/_i49jwXV2Ro?si=3ZjGA-21l8jy7sbu" 
                    frameborder="0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                    className="rounded-xl w-full aspect-video">
                </iframe>
            </section>
            <section className="lg:px-50 md:px-25 px-10 py-10 md:pt-10 pt-32 flex flex-col items-start justify-center gap-5" id="contexte">
                <h2 className="leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Contexte</h2>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">Ayant pu observer de nombreux travaux sur le constructivisme russe du début du XXe siècle, il nous a été demandé de tourner et monter une vidéo de ce type dans notre IUT, ainsi que de créer la musique à partir de boucles préfaites. La vidéo devait tourner autour des une à deux minutes, et posséder un crescendo (aller de plus en plus rapidement).</p>
            </section>
            <section className="lg:px-50 md:px-25 px-10 py-10 md:pt-10 pt-32 flex flex-col items-start justify-center gap-5" id="mise-en-place">
                <h2 className="leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Mise en Place</h2>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">Le tournage s'est fait en groupe. Armé de deux appareils photo, notre mission était de patrouiller le campus afin de trouver le moindre plan d'intérêt : dans le constructivisme, ce n'est pas l'image mais le montage qui fait le film.</p>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">Ainsi, chaque rainure, chaque ligne géométrique, chaque fenêtre devait être filmée. À la fin du tournage, nous avions prêt de cent Go de vidéos et images à exploiter.</p>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">Afin d'habiller l'espace sonore du film et de mettre en place le crescendo, nous avions également du monter notre piste sonore. Nous possédions alors sur Adobe Audition de différentes boucles préconstruites, et il était alors de mon devoir d'en créer une musique accompagnant ma vidéo.</p>
            </section>
            <section className="lg:px-50 md:px-25 sm:px-10 px-0 py-10 md:pt-10 pt-32 flex flex-col items-start justify-center" id="bilan">
                <h2 className="leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Bilan</h2>
                <p className="px-10 sm:px-0 lg:w-2/3 md:w-3/4 w-full text-balance my-5">Un projet audiovisuel dont je suis extrêmement fier. Ce film ne possède aucun scénario. Il possède un thème. Cette sensation d'enfermement où l'on ne peut que chercher à sortir, par tous les moyens qui soit.</p>
                <div className='text-white bg-black p-2 px-5 rounded-full cursor-pointer md:m-0 m-auto'><Link to={nextProject}>Prochain Projet</Link></div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Exit