import WorkNav from "../sectionComponents/WorkNav";
import WorkTopNav from "../sectionComponents/WorkTopNav";
import Footer from "../sectionComponents/Footer";

import conlang from "../assets/img/conlang.png";
import conlang2 from "../assets/img/conlang2.png";

import { Link } from "react-router-dom";

function ConlangArchive() {
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
            <section className="lg:px-50 md:px-25 sm:px-10 px-0 py-10 md:pt-10 pt-32 flex flex-col items-center justify-center" id="home">
                <h1 className="2xl:text-display md:text-heading1 text-heading2 text-black font-bold tracking-tight self-start md:text-left text-center w-full leading-10 xs:leading-normal  pb-5 xs:pb-0">Conlang Archive</h1>
                <img src={conlang} alt="" className="rounded-xl w-full" />
            </section>
            <section className="lg:px-50 md:px-25 px-10 py-21 flex flex-col items-start justify-center" id="contexte">
                <h2 className="leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Contexte</h2>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">J'ai créé nombre de conlangs (langues construites) au fil du temps, mais je n'avais nul part où les centraliser... Tous mes documents pdf étaient éparpillés dans mon google drive, et dans mes fichiers. J'ai donc décider d'y remédier&nbsp;!</p>
            </section>
            <section className="lg:px-50 md:px-25 sm:px-10 px-0 py-21 flex flex-col items-start justify-center" id="mise-en-place">
                <h2 className="px-10 sm:px-0 leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Mise en Place</h2>
                <p className="px-10 sm:px-0 lg:w-2/3 md:w-3/4 w-full text-balance mb-10">Je me suis donc affairé à créer une page en html-css-js esthétiquement plaisante tout en possédant une forme modulaire qui me permette de rajouter de nouveaux pdf au fil de mes créations. C'est donc pour cela que les entrées ont la forme de lignes avec un duo image-texte, en alterné.</p>
                <img src={conlang2} alt="" className="rounded-xl w-full" />
            </section>
            <section className="lg:px-50 md:px-25 px-10 py-21 mb-10 flex flex-col items-start justify-center" id="bilan">
                <h2 className="leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 md:text-left text-center w-full">Bilan</h2>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance my-5">Le site est toujours en ligne, et reste ainsi très utile pour concentrer et retrouver facilement les documents de mes conlangs. De plus, ce site fut une bonne introduction à un web-design plus poussé, avec une vraie mise en pratique des animations, que cela soit au chargement ou au scroll.</p>
                <div className='text-white bg-black p-2 px-5 rounded-full cursor-pointer md:m-0 m-auto'><Link to={nextProject}>Prochain Projet</Link></div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default ConlangArchive