import WorkNav from "../sectionComponents/WorkNav";
import WorkTopNav from "../sectionComponents/WorkTopNav";
import Footer from "../sectionComponents/Footer";

import retromiam from "../assets/img/retromiam.png";
import retro_wireframeP1 from "../assets/img/retro_wireframeP1.png";
import retro_wireframeP2 from "../assets/img/retro_wireframeP2.png";
import retro_wireframeP3 from "../assets/img/retro_wireframeP3.png";
import retro_wireframeP4 from "../assets/img/retro_wireframeP4.png";
import retro_diagram from "../assets/img/retro_diagram.png";

import { Link } from "react-router-dom";

function RetroMiam() {
    const nextProject = "/conlang-archive"
    
    return (
        <>
            <WorkTopNav
                nextProject={nextProject}
            />
            <WorkNav
                links={["Haut","Contexte","Mise en Place","Bilan"]}
                tag={["#home","#contexte","#mise-en-place","#bilan"]}
            />
            <section className="lg:px-50 md:px-25 sm:px-10 px-0 py-10 md:pt-10 pt-32 flex flex-col items-center justify-center" id="home">
                <h1 className="2xl:text-display md:text-heading1 text-heading2 text-black font-bold tracking-tight self-start md:text-left text-center w-full">Retro'miam</h1>
                <img src={retromiam} alt="" className="rounded-xl w-full" />
            </section>
            <section className="lg:px-50 md:px-25 px-10 py-21 flex flex-col items-start justify-center" id="contexte">
                <h2 className="leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Contexte</h2>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">Au cours de ma formation MMI en première année, on nous a posé un projet sous forme de SAE (Situation d'Apprentissage et d'Evaluation) de produire un site à l'aide du trio html-css-js, afin de nous faire la main sur ces fondamentaux du web-development. Le site devait être celui d'un foodtruck, proposant au minimum page d'accueil, page de contact, et page avec le menu du foodtruck.</p>
            </section>
            <section className="lg:px-50 md:px-25 sm:px-10 px-0 py-21 flex flex-col items-start justify-center" id="mise-en-place">
                <h2 className="px-10 sm:px-0 leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Mise en Place</h2>
                <p className="px-10 sm:px-0 lg:w-2/3 md:w-3/4 w-full text-balance">Afin de partir sur de bonnes bases, le principal fut de créer un wireframe pour le site. Ayant d'abord produit celui-ci sur papier, j'ai ensuite pu le calquer en une version moyenne-fidélité sur l'ordinateur.</p>
                
                <div className="flex lg:flex-row flex-col gap-5 w-full items-center justify-center md:p-10 py-10 *:h-100">
                    <img src={retro_wireframeP1} alt="première page du wireframe" className="w-2/3 rounded-xl object-contain" />
                    <img src={retro_wireframeP2} alt="deuxième page du wireframe" className="w-2/3 rounded-xl object-contain" />
                </div>
                <div className="flex lg:flex-row flex-col gap-5 w-full items-center justify-center md:p-10 py-10 mb-10 *:h-100">
                    <img src={retro_wireframeP3} alt="troisième page du wireframe" className="w-2/3 rounded-xl object-contain" />
                    <img src={retro_wireframeP4} alt="quatrième page du wireframe" className="w-2/3 rounded-xl object-contain" />
                </div>
                <p className="px-10 sm:px-0 lg:w-2/3 md:w-3/4 w-full text-balance">J'ai également créé le diagramme d'arbre logique pour la page d'accueil, permettant de connaître exactement les différents mouvements intra-pages et externes de celle-ci. </p>
                <img src={retro_diagram} alt="" className="rounded-xl w-2/3 sm:p-10 py-10 p-0 mx-auto pb-0" />
            </section>
            <section className="lg:px-50 md:px-25 px-10 py-21 flex flex-col items-start justify-center" id="bilan">
                <h2 className="leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Bilan</h2>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance my-5">Projet de mise en bouche pour s'habituer au html-css-js, cette SAE m'a permise de remettre à niveau toutes les compétences en web-development que je possédais avant mes études et pendant celles-ci, et d'en obtenir un résultat moderne, propre, et qui fonctionne à merveille.</p>
                <div className='text-white bg-black p-2 px-5 rounded-full cursor-pointer md:m-0 m-auto'><Link to={nextProject}>Prochain Projet</Link></div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default RetroMiam