
const Navbar = ({appname}) => {
    console.log(appname)
    return(
        <div className="w-full h-[3vh] text-white bg-slate-400 flex justify-center items-start">
            {appname}
        </div>
    )
}

export default Navbar;