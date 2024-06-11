import { IoSearchOutline } from "react-icons/io5";


export const NavBar = () => {
    return ( 
        <div className="w-full relative ">
            <input className="w-full h-11 pl-5 text-xl outline-none rounded-full bg-slate-100 text-slate-800" placeholder="Buscar Anime..." type="text" />
            <IoSearchOutline className="absolute w-9 h-9 right-4 top-1 text-slate-800" />
        </div>
     );
}