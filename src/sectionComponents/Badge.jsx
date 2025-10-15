function Badge({text}){

    return (
        <div className="text-white rounded-full backdrop-blur-sm h-fit w-fit 2xs:text-[1rem] text-[0.89rem] xs:px-5 px-2.5 xs:py-2 py-1 bg-black/50">{text}</div>
    );

}

export default Badge