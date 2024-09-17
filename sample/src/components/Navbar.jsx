
const Navbar = ({data}) => {
    
    
    return(
        <div className="w-full h-[3vh] text-white bg-slate-400 flex justify-center items-start gap-3">

       {data.map((datas) => (
        <span>
          {datas.Appname}
          {datas.Appdata}
        </span>
      ))}
        </div>
    )
}

export default Navbar;

