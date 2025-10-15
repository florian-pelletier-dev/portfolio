import CountUp from 'react-countup';

function Loader(){

    function endCounter() {
        document.getElementById("loader-section").classList.add("opacity-0","transition","duration-600","ease-in-out");
        setTimeout(()=>{
            document.getElementById("loader-section").classList.add("hidden");
        }, 600);
    }

    return(
        <section id="loader-section" className='flex items-center justify-center p-10 z-10000 fixed top-0 left-0 w-full h-screen bg-white'>
            <CountUp
                start={0} 
                end={100} 
                duration={2.75} 
                suffix='%' 
                className='text-display tracking-tight font-bold'
                onEnd={endCounter}
            />
        </section>
    );
}

export default Loader