import site from "../../assets/pdf/site_web.pdf";

function SiteWeb() {

    return (

        <div className="flex flex-col gap-5 justify-center w-full">

            <p className="w-2/3 text-balance">Ma partie, créer un site web à l'aide du CMS Wordpress. Véritable vitrine de l'exposition : il présente le projet, permet la mise en place d'un blog, et propose même la vente de billets et de produits dérivés à l'aide de WooCommerce!</p>

            <iframe src={site} frameborder="0" className="rounded-xl w-full h-[100vh]"></iframe>

        </div>

    )

}

export default SiteWeb