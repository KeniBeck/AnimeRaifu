import { IoSearchOutline } from "react-icons/io5";


export const NavBar = () => {
    return ( 
        <div className="w-72 relative h hidden lg:block">
            <input className="w-full h-11 pl-5 text-xl outline-none rounded-full bg-slate-100" placeholder="Buscar Anime..." type="text" />
            <IoSearchOutline className="absolute w-9 h-9 right-4 top-1" />
        </div>
     );
}