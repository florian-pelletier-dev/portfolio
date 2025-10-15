import arrow from '../assets/svg/arrow-up-right.svg';

function Footer() {
    
    const year = new Date().getFullYear()

    const clock = setInterval(() => {
        const hourTime = new Date().toLocaleString("fr-FR", {
            timeZone: "Europe/Paris",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });
        document.getElementById("clock").textContent = hourTime + " | France"
    }, 1000);

    return(

        <footer className="flex flex-col items-center 2xs:px-10 px-5 2xs:mb-10 mb-5 h-[25lvh] justify-between mt-50">
            <div className="flex items-center justify-between w-full xl:flex-row flex-col xl:gap-0 gap-2">
                <p id="clock">00:00:00 | France</p>
                <ul className='flex flex-col xl:items-start items-center'>
                    <li><a className='flex group link w-fit' href="https://www.instagram.com/florian_pelletier_/" target='_blank'>Instagram <img src={arrow} alt="" className='group-hover:-translate-y-1 duration-300'/></a></li>
                    <li><a className='flex group link w-fit' href="https://www.linkedin.com/in/florianpelletier" target='_blank'>LinkedIn <img src={arrow} alt="" className='group-hover:-translate-y-1 duration-300'/></a></li>
                </ul>
                <p className='lg:text-heading1 md:text-heading2 sm:text-heading3 text-[1rem] font-bold text-black'>florian.pelletier.pro@gmail.com</p>
            </div>
            <h2 className="text-black text-[1rem] font-regular">&copy; {year} - Florian Pelletier</h2>
        </footer>

    );

}

export default Footer