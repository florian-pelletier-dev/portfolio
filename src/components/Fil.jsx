import WorkNav from "../sectionComponents/WorkNav";
import WorkTopNav from "../sectionComponents/WorkTopNav";
import Footer from "../sectionComponents/Footer";

import palais from "../assets/img/fil_palais.png"

import { Link, NavLink, Outlet } from "react-router-dom";

function Fil() {
    const nextProject = "/retro-miam"
    
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
                <h1 className="text-display text-black font-bold tracking-tight self-start">Au Fil d'Elbeuf</h1>
                <img src={palais} alt="" className="rounded-xl w-full" />
            </section>
            <section className="px-50 py-21 flex flex-col items-start justify-center gap-5" id="contexte">
                <h2 className="leading-[1em] font-bold text-balance text-black text-display">Contexte</h2>
                <p className="w-2/3 text-balance">Au cours de ma formation MMI en première année, on nous a posé un projet sous forme de SAE (Situation d'Apprentissage et d'Evaluation) un projet en groupe de produire le concept et la communication envisagée autour d'une exposition immersive fictive célébrant le passé industriel d'Elbeuf "Au fil d'Elbeuf", avec comme site notamment le Palais des drapiers d'Elbeuf.</p>
                <p className="w-2/3 text-balance">Avec Lucas Perrin, Bran Meheu, Timéo Picard, Théo Tahon, Ryan Mumbata, et Samuel Rabarijaona, nous avons donc formé une équipe de choc pour mener à bien ce projet. Spécialisé en développement web, je me suis donc chargé avec Théo Tahon du site web, tout en aidant au besoin dans les autres pôles.</p>
            </section>
            <section className="px-50 py-21 flex flex-col items-start justify-center gap-5" id="mise-en-place">
                <h2 className="leading-[1em] font-bold text-balance text-black text-display">Mise en Place</h2>
                <p className="w-2/3 text-balance">Avec Théo, nous nous sommes donc penchés sur un site Wordpress, bien plus adapté pour ce genre d'évènement qu'un site complètement codé à la main. Après avoir esquissé un wireframe et l'avoir numérisé, nous avons choisi un thème et mis en place l'idée qu'on avait du site à l'aide d'Elementor.</p>
                <p className="w-2/3 text-balance">De l'autre côté, chacun a participé aux graphismes et à la communication. Nous nous sommes également rassemblé pour produire une interview pour notre vidéo avec projet qu'elle soit présente dans un système de vidéo interactive en 360°.</p>
                
                <div className="flex gap-5 items-center justify-center w-full my-10">
                    <NavLink to='charte-graphique' className="link">Charte Graphique</NavLink>
                    <NavLink to='ligne-editoriale' className="link">Ligne Editoriale</NavLink>
                    <NavLink to='axe-communication' className="link">Axe de Communication</NavLink>
                    <NavLink to='site-web' className="link">Site Web</NavLink>
                </div>

                <Outlet />
            </section>
            <section className="px-50 py-21 mb-10 flex flex-col items-start justify-center" id="conclusion">
                <h2 className="leading-[1em] font-bold text-balance text-black text-display ">Conclusion</h2>
                <p className="w-2/3 text-balance my-5">L'un des plus gros projet de groupe qui nous a été donné de produire, cette production autour de l'exposition immersive fictive "Au fil d'Elbeuf" permet d'appréhender un côté bien plus professionalisant dans les projets.</p>
                <div className='text-white bg-black p-2 px-5 rounded-full cursor-pointer'><Link to={nextProject}>Prochain Projet</Link></div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Fil