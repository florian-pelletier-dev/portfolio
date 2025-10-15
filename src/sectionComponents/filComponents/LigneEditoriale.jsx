import ligne from "../../assets/pdf/ligne_editoriale.pdf";

function LigneEditoriale() {

    return (

        <div className="flex flex-col gap-5 justify-center w-full">

            <p className="w-2/3 text-balance">Bien qu'avec une image et un univers graphique, il est nécessaire d'homogénéiser notre communication à l'aide d'une ligne éditoriale complète.</p>

            <iframe src={ligne} frameborder="0" className="rounded-xl w-full h-[100vh]"></iframe>

        </div>

    )

}

export default LigneEditoriale