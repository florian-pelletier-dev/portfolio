import WorkNav from "../sectionComponents/WorkNav";
import WorkTopNav from "../sectionComponents/WorkTopNav";
import Footer from "../sectionComponents/Footer";

import exit from "../assets/img/exit.png";

import { Link, NavLink, Outlet } from "react-router-dom";

function Marathon() {
    const nextProject = "/au-fil-d-elbeuf"
    
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
                <h1 className="2xl:text-display md:text-heading1 text-heading2 text-black font-bold tracking-tight self-start md:text-left text-center w-full leading-10 xs:leading-normal pb-5 xs:pb-0">Marathon</h1>
                <div className="rounded-xl w-full aspect-video bg-black">
                    <Outlet />
                </div>
                

                <div className="mt-5 flex justify-balance items-center w-full">
                    <NavLink to='maquette-application-mobile' className="link">Application mobile</NavLink>
                    <NavLink to='maquette-dashboard-desktop' className="link">Dashboard desktop</NavLink>
                </div>

            </section>
            <section className="lg:px-50 md:px-25 px-10 py-10 md:pt-10 pt-32 flex flex-col items-start justify-center gap-5" id="contexte">
                <h2 className="leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Contexte</h2>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">Dans le cadre d'une SAE (Situation d'Apprentissage et d'Evaluation), il nous a été demandé en groupe avec Lucas Perrin, Timéo Picard, et Théo Tahon de concevoir le wireframe puis la maquette d'une application mobile et d'un dashboard format desktop afin de faciliter l'attribution, la mise en place des tâches des bénévoles pendant le marathon ainsi que d'assurer son bon fonctionnement.</p>
            </section>
            <section className="lg:px-50 md:px-25 px-10 py-10 md:pt-10 pt-32 flex flex-col items-start justify-center gap-5" id="mise-en-place">
                <h2 className="leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Mise en Place</h2>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">Nous avons donc tout d'abord analysé le brief, opéré à un benchmarking des autres applications de ce genre, puis créé des personas afin d'en découler des parcours utilisateurs et des fonctions nécessaires au bon fonctionnement de notre application.</p>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">Une fois les fonctionnalités décidées, nous nous sommes attelés au wireframe. Cela nous a permis de concrétiser l'apparence de notre application, avant de passer à la maquette. Celle-ci a notamment bénéficié de couleurs et d'animations, rapprochant celle-ci du produit fini qu'il ne reste désormais plus qu'à coder.</p>
            </section>
            <section className="lg:px-50 md:px-25 sm:px-10 px-0 py-10 md:pt-10 pt-32 flex flex-col items-start justify-center" id="bilan">
                <h2 className="leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Bilan</h2>                
                <p className="px-10 sm:px-0 lg:w-2/3 md:w-3/4 w-full text-balance my-5">La création d'une application ne se résume pas seulement qu'au codage de celle-ci. Avant toute création hâtive, il est nécessaire d'établir les fonctionnalités et les parcours utilisateurs afin de songer au wireframe puis au maquettage. Seulement là pourrons nous passer au code.</p>
                <div className='text-white bg-black p-2 px-5 rounded-full cursor-pointer md:m-0 m-auto'><Link to={nextProject}>Prochain Projet</Link></div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Marathon