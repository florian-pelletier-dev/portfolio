import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.png';

function Nav() {

    return (

        <nav id="nav" className="bg-white fixed top-0 left-0 w-full min-h-16 h-fit z-100 flex md:flex-row flex-col md:gap-0 gap-2 items-center justify-between p-2">

            <Link to='/'><img src={logo} alt="" className='h-5/6 max-h-10'/></Link>

            <ul className='flex xs:gap-5 2xs:gap-4 gap-2 md:mr-5 mr-0 justify-center items-center 2xs:text-[1rem] text-[0.89rem]'>
                <a href='#top'><li className='cursor-pointer link'>Home</li></a>
                <a href="#skills"><li className='cursor-pointer link'>Skills</li></a>
                <a href="#works"><li className='cursor-pointer link'>Works</li></a>
                <a href="#about"><li className='cursor-pointer link'>About</li></a>
                <a href="/CV_Florian_Pelletier.pdf" target='_blank'><li className='text-white bg-black 2xs:p-2 2xs:px-5 p-1 px-2.5 rounded-full cursor-pointer'>Mon CV</li></a>
            </ul>
        </nav>

    );

}

export default Nav