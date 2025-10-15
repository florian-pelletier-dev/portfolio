import axe from "../../assets/pdf/axe_communication.pdf";

function AxeCommunication() {

    return (

        <div className="flex flex-col gap-5 justify-center w-full">

            <p className="w-2/3 text-balance">Univers graphique et ligne éditoriale en main, l'axe de communication complète la ligne éditoriale pour savoir au mieux comment nous adapter à chaque cible.</p>

            <iframe src={axe} frameborder="0" className="rounded-xl w-full h-[100vh]"></iframe>

        </div>

    )

}

export default AxeCommunication