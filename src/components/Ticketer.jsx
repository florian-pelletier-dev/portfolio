import WorkNav from "../sectionComponents/WorkNav";
import WorkTopNav from "../sectionComponents/WorkTopNav";
import Footer from "../sectionComponents/Footer";

import ticketer from "../assets/img/ticketer.png";
import ticketer_card from "../assets/img/ticketer_card.png";
import ticketer_page from "../assets/img/ticketer_page.png";
import ticketer_login from "../assets/img/ticketer_login.png";
import ticketer_signin from "../assets/img/ticketer_signin.png";
import ticketer_otp from "../assets/img/ticketer_otp.png";
import ticketer_modify from "../assets/img/ticketer_modify.png";

import { Link } from "react-router-dom";

function Ticketer() {
    const nextProject = "/au-fil-d-elbeuf"
    
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
                <h1 className="text-display text-black font-bold tracking-tight self-start">Ticketer</h1>
                <img src={ticketer} alt="" className="rounded-xl w-full" />
            </section>
            <section className="px-50 py-21 flex flex-col items-start justify-center" id="contexte">
                <h2 className="leading-[1em] font-bold text-balance text-black text-display mb-5">Contexte</h2>
                <p className="w-2/3 text-balance">Au cours de ma formation MMI en première année, on nous a posé un projet sous forme de SAE (Situation d'Apprentissage et d'Evaluation) de produire un site avec PHP et SQL. Le but de ce site était pour des administrateurs de créer des évènement, et pour des clients de réserver des places au dits éléments. D'autres contraintes ont également été posées, comme un système d'authentification par exemple.</p>
            </section>
            <section className="px-50 py-21 mb-10 flex flex-col items-start justify-center" id="mise-en-place">
                <h2 className="leading-[1em] font-bold text-balance text-black text-display mb-5">Mise en Place</h2>
                <p className="w-2/3 text-balance">Pour pouvoir réserver les évènement, j'ai choisi un format de cartes avec image, texte, et CTA sur la page d'accueil menant aux pages de l'évènement en question</p>
                <div className="flex flex-col gap-5 w-full items-center justify-center p-10 mb-10">
                    <img src={ticketer_card} alt="deux cartes différentes d'évènements" className="w-2/3 rounded-xl object-contain" />
                    <img src={ticketer_page} alt="la page du premier évènement" className="w-2/3 rounded-xl object-contain" />
                </div>
                <p className="w-2/3 text-balance">J'ai ensuite crée le système de connexion et de création de compte. Pour s'inscrire, la personne aura besoin de son nom d'utilisateur, de son email (unique) et d'un mot de passe. Afin d'activer le compte, un code OTP (One-Time-Password) sera envoyé à l'email fourni.</p>
                <div className="flex gap-5 w-full items-center justify-center p-10 mb-10">
                    <img src={ticketer_signin} alt="la page du premier évènement" className="w-1/3 rounded-xl object-contain" />
                    <img src={ticketer_otp} alt="la page du premier évènement" className="w-1/3 rounded-xl object-contain" />
                    <img src={ticketer_login} alt="deux cartes différentes d'évènements" className="w-1/3 rounded-xl object-contain" />
                </div>
                <p className="w-2/3 text-balance">Enfin, en liant chaque carte à l'id de son administrateur, chacun peut créer ses évènements et les modifier, avec toutes les informations nécessaires.</p>
                <img src={ticketer_modify} alt="" className="rounded-xl w-2/3 p-10 mb-10 mx-auto" />
            </section>
            <section className="px-50 py-21 mb-10 flex flex-col items-start justify-center" id="conclusion">
                <h2 className="leading-[1em] font-bold text-balance text-black text-display ">Conclusion</h2>
                <p className="w-2/3 text-balance my-5">Plongée dans le site full-stack dynamique (ou comment lier utilisateur et serveur), ce projet m'a permis de me concentrer sur l'optimisation de la structure de mes bases de données, de mon code php, et la sécurité des formulaires contre l'injection de commandes malicieuses notamment.</p>
                <div className='text-white bg-black p-2 px-5 rounded-full cursor-pointer'><Link to={nextProject}>Prochain Projet</Link></div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Ticketer