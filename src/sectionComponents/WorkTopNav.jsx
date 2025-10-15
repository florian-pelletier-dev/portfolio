import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.png';

function WorkTopNav({nextProject}) {
    return (
        <nav id="nav" className="bg-white fixed top-0 left-0 w-full min-h-16 h-fit z-100 flex items-center justify-between p-2 md:flex-row flex-col md:gap-0 gap-2">

            <Link to='/'><img src={logo} alt="" className='h-5/6 max-h-10'/></Link>

            <ul className='flex gap-5 md:mr-5 justify-center items-center'>
                <Link to='/'><li className='cursor-pointer link'>Home</li></Link>
                <Link to={nextProject}><li className='text-white bg-black p-2 px-5 rounded-full cursor-pointer'>Prochain Projet</li></Link>
            </ul>
        </nav>
    );
}

export default WorkTopNav