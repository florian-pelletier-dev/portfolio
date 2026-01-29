import WorkNav from "../sectionComponents/WorkNav";
import WorkTopNav from "../sectionComponents/WorkTopNav";
import Footer from "../sectionComponents/Footer";

import dashboard from "../assets/img/dashboard_climat.png";
import arrow from '../assets/svg/arrow-up-right.svg';

import { Link, NavLink, Outlet } from "react-router-dom";

function Dashboard() {
    const nextProject = "/marathon"
    
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
                <h1 className="2xl:text-display md:text-heading1 text-heading2 text-black font-bold tracking-tight self-start md:text-left text-center w-full leading-10 xs:leading-normal pb-5 xs:pb-0">Dashboard Climat</h1>
                <img src={dashboard} alt="" className="rounded-xl w-full" />
                <a className='flex group link w-fit mt-5' href="https://pellefl2.tpweb.univ-rouen.fr/sae303" target='_blank'>Accéder au dashboard (identifiants universitaires nécessaires) <img src={arrow} alt="" className='group-hover:-translate-y-1 duration-300'/></a>
            </section>
            <section className="lg:px-50 md:px-25 px-10 py-10 md:pt-10 pt-32 flex flex-col items-start justify-center gap-5" id="contexte">
                <h2 className="leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Contexte</h2>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">Dans le cadre d'une SAE (Situation d'Apprentissage et d'Evaluation), il nous a été demandé d'utiliser un jeu de données d'un département français. Le but était de représenter lesdites données dans des graphiques afin de créer un dashboard démontrant les impacts du changement climatique et sa présence.</p>
            </section>
            <section className="lg:px-50 md:px-25 px-10 py-10 md:pt-10 pt-32 flex flex-col items-start justify-center gap-5" id="mise-en-place">
                <h2 className="leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Mise en Place</h2>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">Dans un premier temps, j'ai observé les données reçues avec de nombreuses requêtes SQL. Dans mes premières pensées, je souhaitais notamment utiliser les données d'ensoillement, de pluie, de vent, et d'orage ainsi que la température. Cependant pour cause de manque de données trop important, ou encore simplement des résultats non-concluants sur les conclusions à en tirer, j'ai choisi de me concentrer uniquement sur les températures.</p>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">J'ai donc utilisé les données de températures et de nombres de jours froids et chauds (avec plus de granularité sur les jours chauds). J'ai pu grâce à cela créer un graphique linéaire dont chaque courbe représente une année. Les années les plus récentes étant les plus opaques et les plus sombres, ce graphique permet aisément de voir que les années deviennent légèrement plus chaudes en moyenne. J'ai également rajouté de l'interaction en permettant de choisir le nombnre d'années à montrer.</p>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">Deux autres graphiques, plus simple à analyser, sont également présent. Ils représentent le nombre de jours chauds par année pour l'un avec ses courbes de tendances, et la proportion de ces jours chauds par an pour l'autre. Ici, j'y ai rajouté de l'interaction en permettant de choisir l'année à représenter.</p>
                <p className="lg:w-2/3 md:w-3/4 w-full text-balance">Enfin, afin de ne pas se limiter à une seule station météo, j'ai permis le fait de choisir une station parmis celles du département de Loire-Atlantique par deux possibilités : Cliquer directement sur une station sur la carte et sur son nom; ou la choisir dans un menu déroulant. Dans les deux cas, la station est mise à jour dans les paramètres GET de la page, permettant à qui le veut de partager les données pour une station précise.</p>
            </section>
            <section className="lg:px-50 md:px-25 sm:px-10 px-0 py-10 md:pt-10 pt-32 flex flex-col items-start justify-center" id="bilan">
                <h2 className="leading-[1em] font-bold text-balance text-black 2xl:text-display md:text-heading1 text-heading2 mb-5 md:text-left text-center w-full">Bilan</h2>
                <p className="px-10 sm:px-0 lg:w-2/3 md:w-3/4 w-full text-balance my-5">Le dashboard est un véritable outil de représentation des données. Il permet de transformer un bloc de milliers de données, de ne filtrer que celles utiles, et de les montrer de manière graphique et donc plus visible pour donner le résultat espéré. Ici, en un coup d'oeil, on peut observer la présence du changement climatique sans avoir à fouiller toutes les lignes de la base de données.</p>
                <div className='text-white bg-black p-2 px-5 rounded-full cursor-pointer md:m-0 m-auto'><Link to={nextProject}>Prochain Projet</Link></div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Dashboard