import WorkCard from './WorkCard.jsx';
import conlang from '../assets/img/conlang.png';
import fil from '../assets/img/fil.png';
import ticketer from '../assets/img/ticketer.png';
import retromiam from '../assets/img/retromiam.png';
import exit from '../assets/img/exit.png';
import dashboard from '../assets/img/dashboard_climat.png';
import marathon from '../assets/img/marathon.png';

import {useRef, useEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Works() {

    return(

        <section id="works" className='flex flex-col 2xs:p-10 py-10 px-5 text-display bg-black justify-center items-center z-10 min-h-screen'>
            <div className='sticky h-screen flex items-center justify-center top-0 z-0'>
                <h2 className="leading-[1em] font-bold text-balance text-white 3xs:text-display text-heading1">Works</h2>
            </div>

            <section className='z-1 flex flex-col gap-50 mb-50'>

                <WorkCard
                    title={"Dashboard Climat"}
                    desc={"Analyse et représentation d'un jeu de données sur le climat en Loire-Atlantique dans le but de démontrer graphiquement le changement climatique."}
                    img={dashboard}
                    link={"dashboard"}
                    badges={
                        ["sql","js","dashboard"]
                    }
                />

                <WorkCard
                    title={"Application Marathon"}
                    desc={"Création d'une application mobile et d'un dashboard pour organisateurs afin de faciliter l'organisation d'un marathon"}
                    img={marathon}
                    link={"marathon"}
                    badges={
                        ["figma", "maquette","UX/UI"]
                    }
                />

                <WorkCard
                    title={"Au fil d'Elbeuf"}
                    desc={"Création en équipe d'une exposition interactive célébrant le passé historique industriel d'Elbeuf, avec travail sur le fond, la forme, et la communication."}
                    img={fil}
                    link={"au-fil-d-elbeuf"}
                    badges={
                        ["branding","wordpress","adobe"]
                    }
                />

                <WorkCard
                    title={"exit"}
                    desc={"Création d'un crescendo basé sur les codes du constructivisme via une musique sur mesure ainsi que tournage et montage de chaque plan."}
                    img={exit}
                    link={"exit-crescendo"}
                    badges={
                        ["premiere","audition","constructivisme"]
                    }
                />

                <WorkCard
                    title={"Ticketer"}
                    desc={"Un site dynamique de création et réservation d'évènement, avec base de donnée utilisateur, sauvegarde des tickets réservés, et gestion par les administrateurs de leurs propres évènements."}
                    img={ticketer}
                    link={"ticketer"}
                    badges={
                        ["html","css","js","php","sql"]
                    }
                />

                <WorkCard
                    title={"Conlang Archive"}
                    desc={"Un portfolio personnel dédié à un hobby que j'affectionne le plus : le conlanging ou la création de langues."}
                    img={conlang}
                    link={"conlang-archive"}
                    badges={
                        ["html","css","js"]
                    }
                />

                <WorkCard
                    title={"Retro'Miam"}
                    desc={"Création d'un site statique de Food-truck, avec volonté d'apporter un design moderne et épuré."}
                    img={retromiam}
                    link={"retro-miam"}
                    badges={
                        ["html","css","js"]
                    }
                />

            </section>
        </section>

    );

}

export default Works