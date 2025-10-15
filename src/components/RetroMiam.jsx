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
                links={["Haut","Contexte","Mise en Place","Conclusion"]}
                tag={["#home","#contexte","#mise-en-place","#conclusion"]}
            />
            <section className="px-50 py-10 flex flex-col items-center justify-center" id="home">
                <h1 className="text-display text-black font-bold tracking-tight self-start">Retro'miam</h1>
                <img src={retromiam} alt="" className="rounded-xl w-full" />
            </section>
            <section className="px-50 py-21 flex flex-col items-start justify-center" id="contexte">
                <h2 className="leading-[1em] font-bold text-balance text-black text-display mb-5">Contexte</h2>
                <p className="w-2/3 text-balance">Au cours de ma formation MMI en première année, on nous a posé un projet sous forme de SAE (Situation d'Apprentissage et d'Evaluation) de produire un site à l'aide du trio html-css-js, afin de nous faire la main sur ces fondamentaux du web-development. Le site devait être celui d'un foodtruck, proposant au minimum page d'accueil, page de contact, et page avec le menu du foodtruck.</p>
            </section>
            <section className="px-50 py-21 mb-10 flex flex-col items-start justify-center" id="mise-en-place">
                <h2 className="leading-[1em] font-bold text-balance text-black text-display mb-5">Mise en Place</h2>
                <p className="w-2/3 text-balance">Afin de partir sur de bonnes bases, le principal fut de créer un wireframe pour le site. Ayant d'abord produit celui-ci sur papier, j'ai ensuite pu le calquer en une version moyenne-fidélité sur l'ordinateur.</p>
                <div className="flex flex-col gap-5 w-full items-center justify-center p-10 mb-10">
                    <div className="flex flex-row gap-5 w-full items-center justify-center h-150 *:h-full *:w-auto *:aspect-square">
                        <img src={retro_wireframeP1} alt="première page du wireframe" className="rounded-xl object-contain"/>
                        <img src={retro_wireframeP2} alt="deuxième page du wireframe" className="rounded-xl object-contain"/>
                    </div>
                    <div className="flex flex-row gap-5 w-full items-center justify-center h-150 *:h-full *:w-auto *:aspect-square">
                        <img src={retro_wireframeP3} alt="troisième page du wireframe" className="rounded-xl object-contain"/>
                        <img src={retro_wireframeP4} alt="quatrième page du wireframe" className="rounded-xl object-contain"/>
                    </div>
                </div>
                <p className="w-2/3 text-balance">J'ai également créé le diagramme d'arbre logique pour la page d'accueil, permettant de connaître exactement les différents mouvements intra-pages et externes de celle-ci. </p>
                <img src={retro_diagram} alt="" className="rounded-xl w-2/3 p-10 mb-10 mx-auto" />
            </section>
            <section className="px-50 py-21 mb-10 flex flex-col items-start justify-center" id="conclusion">
                <h2 className="leading-[1em] font-bold text-balance text-black text-display ">Conclusion</h2>
                <p className="w-2/3 text-balance my-5">Projet de mise en bouche pour s'habituer au html-css-js, cette SAE m'a permise de remettre à niveau toutes les compétences en web-development que je possédais avant mes études et pendant celles-ci, et d'en obtenir un résultat moderne, propre, et qui fonctionne à merveille.</p>
                <div className='text-white bg-black p-2 px-5 rounded-full cursor-pointer'><Link to={nextProject}>Prochain Projet</Link></div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default RetroMiam