import charte from "../../assets/pdf/charte_graphique.pdf";

function CharteGraphique() {

    return (

        <div className="flex flex-col gap-5 justify-center w-full">

            <p className="w-2/3 text-balance">L'ensemble de l'image de l'exposition se fonde autour d'une charte graphique forte, qui allie monde ouvrier et côté immersif par son univers graphique toutes en formes abstraites.</p>

            <iframe src={charte} frameborder="0" className="rounded-xl w-full h-[100vh]"></iframe>

        </div>

    )

}

export default CharteGraphique