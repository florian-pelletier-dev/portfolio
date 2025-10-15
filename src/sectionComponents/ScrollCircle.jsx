import circle from '../assets/img/scrollCircle.png';
import arrow from '../assets/img/scrollArrow.png';

function ScrollCircle() {
    return (
        <div className="Scroll-Circle absolute bottom-[10vh] left-[5vw] xs:w-[150px] xs:h-[150px] w-[100px] h-[100px]" aria-hidden>
            <img src={circle} alt="scroll!" className='w-full h-full absolute animate-spin [animation-duration:10s]'/>
            <img src={arrow} alt="scroll!" className='w-1/3 h-1/3 absolute top-1/2 left-1/2 transform -translate-y-[50%] -translate-x-[50%] animate-bounce'/>
        </div>
    )
}

export default ScrollCircle;