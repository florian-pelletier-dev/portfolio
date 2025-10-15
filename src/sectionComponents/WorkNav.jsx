function WorkNav({links, tag}) {
    return (
        <nav className="fixed top-1/2 -translate-y-1/2 right-5 flex flex-col items-end-safe justify-center overflow-x-hidden">
            {links.map((link, index) => (
               <a className="duration-300 translate-x-2 hover:translate-x-0 text-gray hover:text-black" key={index} href={tag[index]}>{link} -</a>
        ))}
        </nav>
    );
}

export default WorkNav